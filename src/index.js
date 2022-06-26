module.exports = function toReadable (number) {

    let str = number.toString();
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let array1 = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let array2 = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
   
// BELOW 20

    if (number <= 19) {
        return array1[number].toLowerCase() ;
    } 
    
// BETWEEN 20 AND BELOW 100 AND ENDING WITH 0

    else if (number < 100 && number % 10 === 0) {
        num1 = parseInt(str.charAt(0));
        return `${array2[num1-2]}`.toLowerCase();
    } 
    
// 110

    else if (number === 110) {
        return 'one hundred ten';
    }         
    
    else {

// BETWEEN 20 AND BELOW 100 AND NOT ENDING WITH 0

        if (number > 20 && number < 100 && number % 10 > 0) {
            // num1 - number 0-10
            // num2 - number 21-99
            num1 = parseInt(str.charAt(1));
            num2 = parseInt(str.charAt(0));
            return `${array2[num2-2]} ${array1[num1]}`.toLowerCase() ;
        } 

// ABOVE 100 AND NOT ENDING WITH 0 (WITH 10TH ABOVE 20)     
        else if ((parseInt(str.charAt(2)) > 0) && number > 100 && (parseInt(str.charAt(1)) > 1) ) {
            //num1 - natural numbers
            //num2 - tens
            //num3 - hundreds
            num1 = parseInt(str.charAt(2));
            num2 = parseInt(str.charAt(1));
            num3 = parseInt(str.charAt(0));
            return `${array1[num3]} Hundred ${array2[num2-2]} ${array1[num1]}`.toLowerCase();
        } 
// ABOVE 100 AND NOT ENDING WITH 0 (WITH 10TH BELOW 20)     
        else if ((parseInt(str.charAt(2)) > 0) && number > 100 && (parseInt(str.charAt(1)) === 1) ) {
            //num2 - tens
            //num3 - hundreds
            num2 = 10 + parseInt(str.charAt(2))
            num3 = parseInt(str.charAt(0));
            return `${array1[num3]} Hundred ${array1[num2]}`.toLowerCase();
        } 

// ROUND HUNDREDS

        else if (number % 100 === 0) {
            num1 = parseInt(str.charAt(0));
            return `${array1[num1]} Hundred`.toLowerCase();
        } 
// ABOVE 100 AND ROUNDS TENS       
        else if ((parseInt(str.charAt(2)) === 0) && (parseInt(str.charAt(1)) > 1)) {
            num1 = parseInt(str.charAt(0));
            num2 = parseInt(str.charAt(1));
            return `${array1[num1]} Hundred ${array2[num2-2]}`.toLowerCase();
        }

        else if (number > 100 && (parseInt(str.charAt(1)) === 1)) {
            num1 = parseInt(str.charAt(0));
            return `${array1[num1]} Hundred ten`.toLowerCase();    
        }

        else {
            num1 = parseInt(str.charAt(0));
            num2 = parseInt(str.charAt(2));
            return `${array1[num1]} Hundred ${array1[num2]}`.toLowerCase();   
        };
        
  
    }
  }

