//GLOBAL VARIABLES
const total_Array = [];

//FUNCTION
document.getElementById('submit').onclick = () => {

    if (document.querySelector('#expense-type').value.length === 0 ||
        document.querySelector('#expense').value.length === 0 ||
        document.querySelector('#payment-type').value === '' ||
        document.querySelector('#date').value === '') {

        alert('Please fill in an Item, Expense Value, Payment Type & Date!')
    }

    else {

        // Need to declare variables for formatting date and expense value to european standard //
        const formatted_date_DE = new Date(document.querySelector('#date').value);
        const expense_Value = document.querySelector('#expense').value;
        //////////////////////////////////////////////////////////////////////////////////////////

        document.getElementById('add-expense').innerHTML += `
            <tr id='expense'>
                <td>${document.querySelector('#expense-type').value}</th>
                <td id='expense'>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(expense_Value)}</td>
                <td>${document.querySelector('#payment-type').value}</td>
                <td id='row-date'>${new Intl.DateTimeFormat('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(formatted_date_DE)}</td>
                <td><img id="delete-button" src="./media/delete.png"/></td>
            </tr>`;

        document.querySelectorAll('#delete-button').forEach((deleteButton) => {
            deleteButton.onclick = () => {
                document.getElementById('expense').remove();
            };
        });

        total_Array.push(Number(expense_Value));
    };

    // Need to declare variables for calculating and formatting total sum of expenses //
    let total_Result = total_Array.reduce((a, b) => { return a + b; });
    let formatted_total_Result = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total_Result)
    ////////////////////////////////////////////////////////////////////////////////////
    
    document.getElementById('total').innerHTML = formatted_total_Result;

    document.querySelector('#expense-type').value = '';
    document.querySelector('#expense').value = '';
    document.querySelector('#payment-type').value = '';
    document.querySelector('#date').value = 'tt.mm.jjjj';
};
