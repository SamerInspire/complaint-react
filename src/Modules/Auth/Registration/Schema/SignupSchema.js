
const educationList = [
    {
        en: 'High School',
        ar: 'الشهادة الثانوية'
    },
    {
        en: 'Bachelore degree',
        ar: 'درجة البكالورياس'
    },
    {
        en: 'Master Dgree(M.D)',
        ar: 'درجة الماستر'
    },
    {
        en: 'Doctoral degree (Dr.)',
        ar: 'درجة الدكتوراة'
    }
]
const schemaFields = [
    {
        fieldFor: ['signup', 'signupforadmin'],
        inputType: 'TextField',
        type: 'text',
        label: { ar: 'الإسم الكامل', en: 'Full Name' },
        name: 'name',
        required: true,
        validators: ['nameValidator'],
    },
    {
        fieldFor: ['signup', 'signupforadmin'],
        inputType: 'TextField',
        type: 'email',
        label: { ar: 'البريد الإلكتروني', en: 'Email' },
        name: 'email',
        required: true,
        validators: ['emailValidator'],
    },
    {
        fieldFor: ['signup', 'signupforadmin'],
        inputType: 'TextField',
        type: 'password',
        label: { ar: 'كلمة المرور', en: 'Password' },
        name: 'password',
        required: true,
        validators: ['passwordStrength']
    },
    {
        fieldFor: ['signup', 'signupforadmin'],
        inputType: 'TextField',
        type: 'text',
        label: { ar: 'رقم الهاتف', en: 'Phone Number' },
        name: 'phoneNumber',
        required: true,
        validators: ['phoneNumberValidator']
        /*onInput = {(e) =>{
      e.target.value =isNaN(e.target.value)?e.target.value.substring(0,e.target.value.length-1):e.target.value;
      e.target.value=e.target.value.toString().slice(0,15);*/

    },
    {
        fieldFor: ['signup'],
        inputType: 'Radio',
        label: { ar: 'الجنس', en: 'Gender' },
        name: 'gender',
        required: true,
        options: [
            { label: { ar: 'ذكر', en: 'Male' }, value: 'Male' },
            { label: { ar: 'أنثى', en: 'Female' }, value: 'Female' }
        ]
    },
    {
        fieldFor: ['signup'],
        inputType: 'Select',
        label: { ar: 'المستوى التعليمي', en: 'Education' },
        name: 'education',
        required: true,
        options:
            educationList.map((education, key) => {
                return {
                    label: { ar: education.ar, en: education.en },
                    value: education.en,
                    key: key
                } 
            })

    },
    {
        fieldFor: ['signup'],
        inputType: 'TextField',
        type: 'textArea',
        label: { ar: 'العنوان', en: 'Address' },
        name: 'address',
        multiline: true,
        rows: "4",
        required: true
    },
    {
        fieldFor: ['signup', 'signupforadmin'],
        inputType: 'Checkbox',
        label: { ar: 'أوافق على التعليمات والشروط', en: 'Agree to terms conditions' },
        name: 'agreeValidation',
        required: true,
    }]
export default schemaFields