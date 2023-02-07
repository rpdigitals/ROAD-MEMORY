<form action="/api/create-hotel" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="text" value="name" name="name">
    <input type="text" value="pic " name="picture">
    <input type="text" value=" description" name="description">
    <input type="text" value=" address" name="address">
    <input type="text" value=" latitude" name="latitude">
    <input type="text" value=" longitude" name="longitude">
    {{-- <input type="text" value="opened " name="disponibility"> --}}
    <input type="text" value="open_days_hours " name="open_days_hours">
    <input type="number" value="{{ 1 }}" name="partner_id">
    <button type="submit">Valider</button>

</form>
<br>
<a href="/delete-tour-booking/1">Delete Tour Booking</a>
<br>
<a href="/delete-tour/1">Delete Tour Booking</a>
