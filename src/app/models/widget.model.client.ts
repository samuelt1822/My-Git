
export class Widget {
    _id: String;
    widgetType: String;
    pageId: String;
    size: String;
    text: String;
    url: String;
    width: String;
    name: String;
    formatted: Boolean;
    rows: Number;
    placeholder: String;
    /**Name is not in others */

    constructor(_id?, widgetType?, pageId?, size= '1', text= 'text', width= '100%', url= 'url', name= 'name',
                formatted= false, rows= 1, placeholder= 'placeholder') {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
        this.name = name;
        this.formatted = formatted;
        this.rows = rows;
        this.placeholder = placeholder;
    }
}
