import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'itblognote@gmail.com';	
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="height:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">Paint Online</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online Image Editor."},
				{title: "Author:", value: 'ThanhPhat IT'},
				{title: "Email:", html: '<a href="'+email+'">'+email+'</a>'},
				{title: "GitHub:", html: '<a href="https://github.com/thanhphatit">https://github.com/thanhphatit Chao</a>'},
				{title: "Website:", html: '<a href="https://www.itblognote.com/">https://www.itblognote.com/</a>'},
			],
		};
		this.POP.show(settings);
	}
}
export default Help_about_class;
