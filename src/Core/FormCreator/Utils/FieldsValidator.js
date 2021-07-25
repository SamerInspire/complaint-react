import defualtValidators from '../../Utils/DefualtValidators'


class BreakException extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause
        this.name = 'ReadError'
    }
}

export default function validateSchema({ schema, values}) {
    const errors = {}
    schema.forEach(element => {
        try {
            element.validators.forEach(validator => {
                if(!!defualtValidators[validator]){
                    validator = defualtValidators[validator]
                }
                if (!validator.validatorfn(values[element.name]))
                {
                    errors[element.name] = validator.massege.ar //t("lang") === "en" ? validator.massege.en : validator.massege.ar
                    throw new BreakException('Break')
                }
            })
        } catch (e) {
            console.log(e.message)
        }
    })
    return errors
}