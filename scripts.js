document.addEventListener('DOMContentLoaded', function() {
    const addPaymentButton = document.getElementById('addPayment');
    const generateReportButton = document.getElementById('generateReport');
    const sendReminderButton = document.getElementById('sendReminder');

    if (addPaymentButton) {
        addPaymentButton.addEventListener('click', function() {
            console.log('Add New Payment button clicked');
            alert('Add New Payment clicked!');
            // Your code to handle adding a new payment
        });
    } else {
        console.error('Add New Payment button not found');
    }

    if (generateReportButton) {
        generateReportButton.addEventListener('click', function() {
            console.log('Generate Report button clicked');
            alert('Generate Report clicked!');
            // Your code to handle report generation
        });
    } else {
        console.error('Generate Report button not found');
    }

    if (sendReminderButton) {
        sendReminderButton.addEventListener('click', function() {
            console.log('Send Reminder button clicked');
            alert('Send Reminder clicked!');
            // Your code to handle sending a reminder
        });
    } else {
        console.error('Send Reminder button not found');
    }
});
console.log('Script loaded successfully');
