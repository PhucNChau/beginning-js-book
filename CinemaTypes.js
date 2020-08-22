function Cinema()
{
    this.bookings = new Array();
}

Cinema.prototype.addBooking = function(bookingId, customerName, film, showDate)
{
    this.bookings[bookingId] = new CustomerBooking(bookingId, customerName, film, showDate);
}

Cinema.prototype.GetBookingTable = function()
{
    var booking;
    var bookingsTableHtml = "<table border=1>";

    for (booking in this.bookings)
    {
        bookingsTableHtml += "<tr><td>";
        bookingsTableHtml += this.bookings[booking].getBookingId();
        bookingsTableHtml += "</td>";

        bookingsTableHtml += "<td>";
        bookingsTableHtml += this.bookings[booking].getCustomerName();
        bookingsTableHtml += "</td>";

        bookingsTableHtml += "<td>";
        bookingsTableHtml += this.bookings[booking].getFilm();
        bookingsTableHtml += "</td>";

        bookingsTableHtml += "<td>";
        bookingsTableHtml += this.bookings[booking].getShowDate();
        bookingsTableHtml += "</td>";
        bookingsTableHtml += "</tr>";
    }

    bookingsTableHtml += "</table>";
    return bookingsTableHtml;
}