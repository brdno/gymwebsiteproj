function submitForm() {
    const userForm = document.getElementById('userForm');
    const addressForm = document.getElementById('addressForm');
  
    
    if (!userForm.checkValidity() || !addressForm.checkValidity()) {
      alert('Somethings not right, please try again.');
      return;
    }
  
    
    const userFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'gender'];
    const addressFields = ['address1', 'address2', 'city', 'state', 'zip'];
  

    const userInfo = [];
    for (let i = 0; i < userFields.length; i++) {
      userInfo.push(userForm.elements[userFields[i]].value);
    }
  

    const addressInfo = [];
    for (let i = 0; i < addressFields.length; i++) {
      addressInfo.push(addressForm.elements[addressFields[i]].value);
    }
  
    
    const combinedInfo = {};
    for (let i = 0; i < userFields.length; i++) {
      combinedInfo[userFields[i]] = userInfo[i];
    }
    for (let i = 0; i < addressFields.length; i++) {
      combinedInfo[addressFields[i]] = addressInfo[i];
    }
  
    console.log('User Information:', combinedInfo);
    alert('Thanks for joining us!');
  }