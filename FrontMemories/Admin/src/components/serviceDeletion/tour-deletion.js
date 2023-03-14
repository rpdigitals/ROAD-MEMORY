class TourDeletion {
  delete(identifier) {
    identifier;
    const swalWithBootstrapButtons = $Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Êtes vous sûres ?",
        text: "Cet action sera irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OUI, Supprimer!",
        cancelButtonText: "Non, Annuler!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Tour.deleteTour(identifier)
            .then((response) => {
              swalWithBootstrapButtons.fire(
                "Supprimé!",
                "Ce site a été suprimé.",
                "success"
              );
              location.reload();
            })
            .catch((error) => {
              swalWithBootstrapButtons.fire(
                "Desolé !",
                "Une erreur s'est produite",
                "Verifiez votre connexion et réessayez ."
              );
            });
        } else {
          swalWithBootstrapButtons.fire(
            "Annulé !",
            "Vos données sont toujours disponible"
          );
        }
      });
  }
}
export default new TourDeletion();
