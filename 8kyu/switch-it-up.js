//! SWITCH IT UP!

//* When provided with a number between 0-9, return it in words.

//* Input :: 1

//* Output :: "One".

//* If your language supports it, try using a switch statement.


//? my solution 

function switchItUp(number){
  switch(number) {
    case 1:
        return "One";
        break;
    case 2:
        return "Two";
        break;
    case 3:
        return "Three";
        break;
    case 4:
        return "Four";
        break;
    case 5:
        return "Five";
        break;
    case 6:
        return "Six";
        break;
    case 7:
        return "Seven";
        break;
    case 8:
        return "Eight";
        break;
    case 9:
        return "Nine";
        break;
    case 10:
        return "Ten";
        break;
    default:
        return "Zero";
  }
}



//? top solution 

function switchItUp(number) {
  switch (number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}

//? one liner

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
