import React, { Component } from "react";
import fromCDN from "from-cdn";

class OrgChart extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.ready = fromCDN([
      "/diagram/diagram.js",
      "/diagram/diagram.css?v=3.0.2",
      "/Common/index.css?v=3.0.2",
      "/Common/diagram.css?v=3.0.2",
      "/Common/searchsampledata.js?v=3.0.2",
      "/Common/combobox/combobox.min.js?v=3.0.2",
      "/Common/combobox/combobox.min.css?v=3.0.2",
      "/Common/menu/menu.js?v=3.0.2",
      "/Common/menu/menu.css?v=3.0.2",
      "/css/materialdesignicons.min.css?v=3.0.2",
      "/css/comboboxcustom.css",
    ]);
  }

  componentDidMount() {
    /* globals dhx */
    this.ready.then((_) => {
      var combobox = new dhx.Combobox("combobox", {
        label: "Search:",
        labelPosition: "left",
      });

      combobox.data.parse([
        { value: "Barkha Jain ", id: "17" },
        { value: "Betsy Carol D'souza", id: "5" },
        { value: "Bhaskar Gangipamula", id: "1" },
        { value: "Bhushan Bommaganti ", id: "14" },
        { value: "Guru Bhaskar", id: "20" },
        { value: "Harin Kumar ", id: "22" },
        { value: "Kavya Mandhadi ", id: "27" },
        { value: "Krishna Bonagiri ", id: "2" },
        { value: "Loknath Vendra ", id: "11" },
        { value: "Naga Jyothi ", id: "18" },
        { value: "Pallavi Sinha", id: "31" },
        { value: "Prashanth Mudda ", id: "25" },
        { value: "Raghava Kothamasu ", id: "6" },
        { value: "Richa Sharma", id: "28" },
        { value: "Sai Suresh ", id: "3" },
        { value: "Sandeep Thomas", id: "24" },
        { value: "Santosh Vutukuri ", id: "12" },
        { value: "Shahed Akhter ", id: "9" },
        { value: "Shaik Akbar Ali ", id: "10" },
        { value: "Shivakumara Madegowda ", id: "7" },
        { value: "Shweta Tikku", id: "30" },
        { value: "Sowmya Ega ", id: "19" },
        { value: "Sreenivasa Rao", id: "23" },
        { value: "Srinivas Gundabattula ", id: "13" },
        { value: "Sushma Uliya", id: "29" },
        { value: "Venkateswara Rao ", id: "15" },
        { value: "Vijay Babu Nagaboina ", id: "21" },
        { value: "Vinod Kumar Gottepu ", id: "26" },
        { value: "Vishal Agarwal ", id: "8" },
        { value: "Vishal Sethi ", id: "4" },
        { value: "Yamini ", id: "16" },
      ]);

      combobox.events.on("Change", function (id) {
        if (id) {
          diagram.showItem(id);
          diagram.selection.add(id);
        }
      });

      combobox.events.on("Open", function () {
        combobox.clear();
      });

      var diagram = new dhx.Diagram("diagram", {
        type: "org",
        defaultShapeType: "template",
      });

      diagram.data.parse([
        {
          id: "1",
          text: "Founder & President",
          title: "Bhaskar Gangipamula",
          type: "img-card",
          img: "../UserProfileImages/1.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "2",
          text: "VP of Engineering",
          title: "Krishna Bonagiri ",
          type: "img-card",
          img: "../UserProfileImages/2.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "3",
          text: "VP of Sales",
          title: "Sai Suresh ",
          type: "img-card",
          img: "../UserProfileImages/3.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "4",
          text: "VP of Digital Transformation",
          title: "Vishal Sethi ",
          type: "img-card",
          img: "../UserProfileImages/4.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "5",
          text: "Director - Account Management",
          title: "Betsy Carol D'souza",
          type: "img-card",
          img: "../UserProfileImages/5.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "6",
          text: "Delivery Head- India",
          title: "Raghava Kothamasu ",
          type: "img-card",
          img: "../UserProfileImages/6.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "7",
          text: "Manager- Patent Engineering",
          title: "Shivakumara Madegowda ",
          type: "img-card",
          img: "../UserProfileImages/7.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "8",
          text: "Technical Lead",
          title: "Vishal Agarwal ",
          type: "img-card",
          img: "../UserProfileImages/8.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "9",
          text: "HR Manager",
          title: "Shahed Akhter ",
          type: "img-card",
          img: "../UserProfileImages/9.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "10",
          text: "Technical Lead",
          title: "Shaik Akbar Ali ",
          type: "img-card",
          img: "../UserProfileImages/10.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "11",
          text: "Practice Lead- Data",
          title: "Loknath Vendra ",
          type: "img-card",
          img: "../UserProfileImages/11.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "12",
          text: "Practice Lead- AI & ML",
          title: "Santosh Vutukuri ",
          type: "img-card",
          img: "../UserProfileImages/12.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "13",
          text: "Delivery Manager- DL",
          title: "Srinivas Gundabattula ",
          type: "img-card",
          img: "../UserProfileImages/13.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "14",
          text: "Delivery Lead- DL",
          title: "Bhushan Bommaganti ",
          type: "img-card",
          img: "../UserProfileImages/14.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "15",
          text: "Delivery Lead- DL",
          title: "Venkateswara Rao ",
          type: "img-card",
          img: "../UserProfileImages/15.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "16",
          text: "Recruitment Lead",
          title: "Yamini ",
          type: "img-card",
          img: "../UserProfileImages/16.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "17",
          text: "HR Lead",
          title: "Barkha Jain ",
          type: "img-card",
          img: "../UserProfileImages/17.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "18",
          text: "Recruitment Lead",
          title: "Naga Jyothi ",
          type: "img-card",
          img: "../UserProfileImages/18.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "19",
          text: "Recruiter",
          title: "Sowmya Ega ",
          type: "img-card",
          img: "../UserProfileImages/19.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "20",
          text: "Lead Developer",
          title: "Guru Bhaskar",
          type: "img-card",
          img: "../UserProfileImages/20.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "21",
          text: "Lead Developer",
          title: "Vijay Babu Nagaboina ",
          type: "img-card",
          img: "../UserProfileImages/21.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "22",
          text: "Lead Developer",
          title: "Harin Kumar ",
          type: "img-card",
          img: "../UserProfileImages/22.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "23",
          text: "Lead Developer",
          title: "Sreenivasa Rao",
          type: "img-card",
          img: "../UserProfileImages/23.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "24",
          text: "Program Manager",
          title: "Sandeep Thomas",
          type: "img-card",
          img: "../UserProfileImages/24.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "25",
          text: "Lead Developer",
          title: "Prashanth Mudda ",
          type: "img-card",
          img: "../UserProfileImages/25.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "26",
          text: "Lead Developer",
          title: "Vinod Kumar Gottepu ",
          type: "img-card",
          img: "../UserProfileImages/26.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "27",
          text: "Lead Developer",
          title: "Kavya Mandhadi ",
          type: "img-card",
          img: "../UserProfileImages/27.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "28",
          text: "Sr Account Manager",
          title: "Richa Sharma",
          type: "img-card",
          img: "../UserProfileImages/28.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "29",
          text: "HR & Operations Manager",
          title: "Sushma Uliya",
          type: "img-card",
          img: "../UserProfileImages/29.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "30",
          text: "Sr Account Manager",
          title: "Shweta Tikku",
          type: "img-card",
          img: "../UserProfileImages/30.png?updated=637350605228581650",
          width: "270",
        },
        {
          id: "31",
          text: "Account Manager",
          title: "Pallavi Sinha",
          type: "img-card",
          img: "../UserProfileImages/31.png?updated=637350605228581650",
          width: "270",
        },
        { id: "1-2", from: "1", to: "2", type: "line" },
        { id: "1-3", from: "1", to: "3", type: "line" },
        { id: "1-4", from: "1", to: "4", type: "line" },
        { id: "1-5", from: "1", to: "5", type: "line" },
        { id: "1-6", from: "1", to: "6", type: "line" },
        { id: "6-7", from: "6", to: "7", type: "line" },
        { id: "6-8", from: "6", to: "8", type: "line" },
        { id: "6-9", from: "6", to: "9", type: "line" },
        { id: "6-10", from: "6", to: "10", type: "line" },
        { id: "6-11", from: "6", to: "11", type: "line" },
        { id: "6-12", from: "6", to: "12", type: "line" },
        { id: "6-13", from: "6", to: "13", type: "line" },
        { id: "13-14", from: "13", to: "14", type: "line" },
        { id: "13-15", from: "13", to: "15", type: "line" },
        { id: "9-16", from: "9", to: "16", type: "line" },
        { id: "9-17", from: "9", to: "17", type: "line" },
        { id: "9-18", from: "9", to: "18", type: "line" },
        { id: "9-19", from: "9", to: "19", type: "line" },
        { id: "2-20", from: "2", to: "20", type: "line" },
        { id: "2-21", from: "2", to: "21", type: "line" },
        { id: "2-22", from: "2", to: "22", type: "line" },
        { id: "2-23", from: "2", to: "23", type: "line" },
        { id: "2-24", from: "2", to: "24", type: "line" },
        { id: "2-25", from: "2", to: "25", type: "line" },
        { id: "2-26", from: "2", to: "26", type: "line" },
        { id: "2-27", from: "2", to: "27", type: "line" },
        { id: "5-28", from: "5", to: "28", type: "line" },
        { id: "5-29", from: "5", to: "29", type: "line" },
        { id: "5-30", from: "5", to: "30", type: "line" },
        { id: "5-31", from: "5", to: "31", type: "line" },
      ]);
    });
  }

  render() {
    return <div ref={this.container} className="widget-box"></div>;
  }
}

export default OrgChart;
