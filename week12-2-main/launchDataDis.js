//class for setting up the data from dataloader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
        accel_x,
        accel_y,
        accel_z,
        magnetic_x,
        magnetic_y,
        magnetic_z,
        gyro_x,
        gyro_y,
        gyro_z,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accel_x = accel_x;
        this.accel_y = accel_y;
        this.accel_z = accel_z;
        this.magnetic_x = magnetic_x;
        this.magnetic_y = magnetic_y;
        this.magnetic_z = magnetic_z;
        this.gyro_x = gyro_x;
        this.gyro_y = gyro_y;
        this.gyro_z = gyro_z;
    }
}

//the getData function extracts the data forom the dataloader.js file
function getData() {
    var loadedData = loadData();
    return loadedData;
}

//function to setup data in the table
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay(){
    console.log("updateDisplay() started");
    //record and display time data
    theTime = new Date();

    //new if statement style cond ? ifTrue : ifFalse
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
     + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //update the onscreen time
document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + 
theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

    //update table
    var timeRead = data[index].time_seconds;

    if (timeRead >= 10) {
        document.getElementById("dataTable").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("dataTable").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, "&#176");
        document.getElementById("dataTable").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, "&#176");
        document.getElementById("dataTable").rows["gps_altitude"].innerHTML = dataRow("gps Altitude", data[index].gps_altitude, "");
        document.getElementById("dataTable").rows["bmp_altitude"].innerHTML = dataRow("bmp Altitude", data[index].bmpSensor_altitude, "meters");
        document.getElementById("dataTable").rows["bmp_pressure"].innerHTML = dataRow("bmp Pressure", data[index].bmpSensor_pressure, "atm");
        document.getElementById("dataTable").rows["bmp_temperature"].innerHTML = dataRow("bmp Temperature", data[index].bmpSensor_temp, "&#176;C");
        document.getElementById("dataTable").rows["digital_temperature"].innerHTML = dataRow("Digital Temperature", data[index].digSensor_temp, "&#176;C");
        document.getElementById("dataTable").rows["css_temperature"].innerHTML = dataRow("css Temperature", data[index].cssSensor_temp, "");
        document.getElementById("dataTable").rows["css_eco2"].innerHTML = dataRow("css eco2", data[index].cssSensor_eCO2, "ppm");
        document.getElementById("dataTable").rows["css_tvoc"].innerHTML = dataRow("css tvoc", data[index].cssSensor_TVOC, "ppm");
        document.getElementById("dataTable").rows["uv"].innerHTML = dataRow("UV", data[index].uv, "");
        document.getElementById("dataTable").rows["accel_x"].innerHTML = dataRow("Accel X", data[index].accel_x, "m/sec&#178");
        document.getElementById("dataTable").rows["accel_y"].innerHTML = dataRow("Accel Y", data[index].accel_y, "m/sec&#178");
        document.getElementById("dataTable").rows["accel_z"].innerHTML = dataRow("Accel Z", data[index].accel_z, "m/sec&#178");
        document.getElementById("dataTable").rows["magnetic_x"].innerHTML = dataRow("Magnetic X", data[index].magnetic_x, "T");
        document.getElementById("dataTable").rows["magnetic_y"].innerHTML = dataRow("Magnetic Y", data[index].magnetic_y, "T");
        document.getElementById("dataTable").rows["magnetic_z"].innerHTML = dataRow("Magnetic Z", data[index].magnetic_z, "T");
        document.getElementById("dataTable").rows["gyro_x"].innerHTML = dataRow("Gyro X", data[index].gyro_x, "&#176;/sec");
        document.getElementById("dataTable").rows["gyro_y"].innerHTML = dataRow("Gyro Y", data[index].gyro_y, "&#176;/sec");
        document.getElementById("dataTable").rows["gyro_z"].innerHTML = dataRow("Gyro Z", data[index].gyro_z, "&#176;/sec");
    }

    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}