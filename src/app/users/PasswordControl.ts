import { InputField } from "@remult/angular/interfaces";
import { InputTypes } from "remult/inputTypes";
import { terms } from "../terms";

export class PasswordControl extends InputField<string>
{
    constructor(caption = terms.password) {
        super({ caption, inputType: InputTypes.password, defaultValue: () => '' });
    }
}
