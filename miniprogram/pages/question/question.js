"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_title: '',
        question_context: ''
    },
    formSubmit: function (e) {
        var info = e.detail.value;
        api_1.question_add(info);
    },
    formReset: function (e) {
        console.log(e);
        this.setData({
            username: '',
            password: ''
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUE0QztBQUU1QyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUM7UUFDRCxjQUFjLEVBQUMsRUFBRTtRQUNqQixnQkFBZ0IsRUFBQyxFQUFFO0tBQ3RCO0lBQ0QsVUFBVSxZQUFDLENBQU07UUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUN6QixrQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXRCLENBQUM7SUFDRCxTQUFTLFlBQUMsQ0FBSztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3F1ZXN0aW9uX2FkZH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHF1ZXN0aW9uX3RpdGxlOicnLFxyXG4gICAgICAgIHF1ZXN0aW9uX2NvbnRleHQ6JydcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KGU6IGFueSl7XHJcbiAgICAgICAgdmFyIGluZm8gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHF1ZXN0aW9uX2FkZChpbmZvKVxyXG5cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQoZTphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSkiXX0=