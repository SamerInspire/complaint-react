
const schemaFields = [{
    inputType: 'TextField',
    type: 'email',
    label: { ar: 'البريد الإلكتروني', en: 'Email' },
    name: 'email',
    required: true,
    gridSize: '12',
    validators: [{
        id: 'isEmail',
        massege: { ar: 'يرجى ادخال بريد الكتروني صحيح', en: 'Email not Valid' },
        validatorfn: (value) => {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (value.match(validRegex)) {
                return true
            } else {
                return false
            }
        }
    }
    ],

},
{
    inputType: 'TextField',
    type: 'password',
    label: { ar: 'كلمة المرور', en: 'Password' },
    name: 'password',
    required: true
}]

export default schemaFields