
/******************************* BUTTONS */
const selectOptionTxt = "-- Select option --";

const setButton = (className, html, attrs) => {
    return '<button type="button" class="btn bnt-block ' + className + '" ' + attrs + '>' + html + '</button>';
}

/******************************* END BUTTONS */

/******************************* ICONS */

const iconRemove = () => {
    return '<i class="fas fa-minus-circle"></i>';
}

const iconEdit = () => {
    return '<i class="fas fa-edit"></i>';
}

const iconFilter = () => {
    return '<i class="fas fa-filter text-primary"></i>';
}

/******************************* END ICONS */


/******************************* SELECT */

const setSelect = (id, options = setSelectOption(), requiredClass = ' required ') => {
    return '<select class="form-control ' + requiredClass + id + '" id="' + id + '">' + options + '</select>';
}
const setSelectOption = (text = selectOptionTxt, value = "") => {
    return '<option value="' + value + '">' + text + '</option>';
}

const fillSelect = (values, element, text = "Text", value = "Value") => {
    element.empty();
    let option = values.length == 1 ? "" : setSelectOption();
    $(values).each((key, val) => {
        option += setSelectOption(text !== '' ? val[text] : val, value !== '' ? (val[value] == null ? val[text] : val[value]) : val);
    });
    element.append(option);
}

/******************************* END SELECT */