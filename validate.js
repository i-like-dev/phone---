document.getElementById('phoneForm').onsubmit = function(event) {
    event.preventDefault();
    var phone = document.getElementById('phone').value;
    var allowedNumbers = ["+886920746572", "+886932142243"]; // 在這裡填入允許的電話號碼

    if (allowedNumbers.includes(phone)) {
        window.location.href = 'https://mp.yeeloc.com/open?data=sKitUytLpZbDwcZt5V3mRwb2RgwAqKsIlB16ZlIeaJIwMxQIiKUZ6WSO3fejQwS1';
    } else {
        alert('電話號碼不正確！');
    }
};
