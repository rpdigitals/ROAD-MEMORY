//# alert success
this.$swal.fire({
  position: "top-end",
  icon: "success",
  title: "Site ajouté avec succès",
  showConfirmButton: false,
  timer: 1500,
});

//# alert confirm suppression

const swalWithBootstrapButtons = this.$swal.mixin({
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
      swalWithBootstrapButtons.fire(
        "Supprimé!",
        "Ce site a été suprimé.",
        "success"
      );
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        "Cancelled",
        "Your imaginary file is safe :)",
        "error"
      );
    }
  });
