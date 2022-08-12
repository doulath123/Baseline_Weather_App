
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {  useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; 

export const Weather = ()=>{
   const array = [
        "Araria, Bihar",
        "Mumbai, Maharashtra",
        "Delhi, Delhi",
        "Bengaluru, Karnataka",
        "Hyderabad, Telangana",
        "Ahmedabad, Gujrat",
        "Chennai, Tamil Nadu",
        "Kolkata, West Bengal",
        "Surat, Gujrat",
        "Pune, Maharashtra",
        "JaiPur, Rajasthan",
        "Lucknow, Utter Prades",
        "Kanpur, Uttar Pradesh",
        "Nagpur, Maharashtra",
        "Khagaria, Bihar",
        "Indore, Madhya Pradesh",
        "Thane, Maharashtra",
        "Bhopal, Madhya Pradesh",
        "Bhojpur, Bihar",
        "Visakhapatnam, Andra Pradesh",
        "Pimpri-Chichwad, Maharashtra",
        "Vadodara, Gujarat",
        "Ghiziabad, Uttar Pradesh",
        "Ludhiana, Punjab",
        "Agra, Utter Pradesh",
        "Nashik,Maharashtra",
        "Ranchi, Jharkhand",
        "Faridabad, Haryana",
        "Meerut, Uttar Pradesh",
        "Rajkot, Gujarat",
        "Kaluan-Dombivli, Maharashtra",
        "VAranasi, Uttar Pradesh",
        "Srinagar, Jammu and Kashmir",
        "Aurangabad, Maharashtra",
        "Dhanbad, Jharkhand",
        "Amritsar, Punjab",
        "Navi Mumbai, Maharashtra",
        "Lakhisarai, Bihar",
        "Madhepura, Bihar",
        "Allahabad, Uttar Pradesh",
        "Howrah, Wesh Bengal",
        "Madhubani, Bihar",
        "Gwalior, Madhya Pradesh",
        "Jabalpur, Madhya Pradesh",
        "Coimbatore, Tamil Nadu",
        "Vijaywada, Andhra Pradesh",
        "Jodhpur, Rajasthan",
        "Madurai, Tamil Nadu",
        "Raipur, Chhattisgarh",
        "Kota, Rajasthan",
        "Chandigarh, Chandigarh",
        "Guwahati, Assam",
        "Solapur, Maharashtra",
        "Hubballi, Karnataka",
        "Arwal, Bihar",
        "Mysore, Karnataka",
        "Tiruchirappalli, Tamil Nadu",
        "Bareilly, Uttar Pradesh",
        "Aligarh, Uttar Pradesh",
        "Tiruppur, Tamil Nadu",
        "Gurgaon, Haryana",
        "Moradabad, Uttar Pradesh",
        "Jalandhar, Punjab",
        "Bhubaneswar, Odisha",
        "Banka, Bihar",
        "Salem, Tamil Nadu",
        "Warangal, Telangana",
        "Mira-Bhayandar, Maharashtra",
        "Jalgaon, Maharashtra",
        "Guntur, Andhra Pradesh",
        "Thiruvananthapuram, Kerala",
        "Bhiwandi, Maharashtra",
        "Saharanpur, Uttar Pradesh",
        "Gorakhpur, Uttar Pradesh",
        "Bikaner, Rajasthan",
        "Amravati, Maharashtra",
        "Noida, Uttar Pradesh",
        "Jamshedpur, Jharkhand",
        "Bhilai, Chhattisgarh",
        "Cuttack, Odisha",
        "Firozabad, Uttar Pradesh",
        "Kochi, Kerala",
        "Nellore, Andhra Pradesh",
        "Bhavnagar, Gujarat",
        "Dehradun, Uttarakhand",
        "Durgapur, West Bengal",
        "Asansol, West Bengal",
        "Rourkela, Odisha",
        "Nanded, Maharashtra",
        "Kolhapur, Maharashtra",
        "Ajmer, Rajasthan",
        "Akola, Maharashtra",
        "Gulbarga, Karnataka",
        "Jamnagar, Gujarat",
        "Ujjain, Madhya Pradesh",
        "Loni, Uttar Pradesh",
        "Siliguri, West Bengal",
        "Jhanshi, Uttar Pradesh",
        "Ulhasnagar, Maharashtra",
        "Jammu, Jammu and Kashmir",
        "Sangli-Miraj & Kupwad, Maharashtra",
        "Mangalore, Karnataka",
        "Erode, Tamil Nadu",
        "Belgaum, Karnataka",
        "Kunool, Andhra Pradesh",
        "Ambattur, Tamil Nadu",
        "Rajahmundry, Andhra Pradesh",
        "Tirunelveli, Tamil Nadu",
        "Malegaon, Maharashtra",
        "Gaya, Bihar",
        "Udaipur, Rajasthan",
        "Karur, Tamil Nadu",
        "Kakinada, Andhra Pradesh",
        "Davanagere, Karnataka",
        "Kozhikode, Kerala",
        "Maheshtala, West Bengal",
        "Bokaro, Jharkhand",
        "South Dumdum, West Bengal",
        "Bellary, Karnataka",
        "Ptiala, Punjab",
        "Gopalpur, West Bengal",
        "GopalGanj, Bihar",
        "Agartala, Tripura",
        "Bhagalpur, Bihar",
        "Muzaffarnagar, Uttar Pradesh",
        "Bhatpara, West Bengal",
        "Panihati, West Bengal",
        "Latur, Maharashtra",
        "Dhule, Maharashtra",
        "Rohtak, Haryana",
        "Sagar, Madhya Pradesh",
        "Korba, Chhattisgarh",
        "Bhilwara, Rajasthan",
        "Berhampur, Odisha",
        "Muzaffarpur, Bihar",
        "Ahmednagar, Maharashtra",
        "Mathura, Uttar Pradesh",
        "Kollam, Kerala",
        "Avadi, Tamil Nadu",
        "Kadapa, Andhra Pradesh",
        "Anantapuram, Andhra Pradesh",
        "Kamarhati, West Bengal",
        "Bilaspur, Chhattisgarh",
        "Sambalpur, Odisha",
        "Shahjahanpur, Uttar Pradesh",
        "Satara, Maharashtra",
        "Bijapur, Karnataka",
        "Rampur, Uttar Pradesh",
        "Shimoga, Karnataka",
        "Chandrapur, Maharashtra",
        "Junagadh, Gujarat",
        "Thrissur, Kerala",
        "Alwar, Rajasthan",
        "Bardhaman, West Bengal",
        "Kulti, West Bengal",
        "Nizamabad, Telangana",
        "Parbhani, Maharashtra",
        "Tumkur, Karnataka",
        "Khammam, Telangana",
        "Uzhavarkarai, Puducherry",
        "Bihar Sharif, Bihar",
        "Panipat, Haryana",
        "Darbhanga, Bihar",
        "Bally, West Bengal",
        "Aizawl, Mizoram",
        "Dewas, Madhya pradesh",
        "Ichalkaranji, Maharashtra",
        "Karnal, Haryana",
        "Bathinda, Punjab",
        "Jalna, Maharashtra",
        "Eluru, Andra Pradesh",
        "Barasat, West Bengal",
        "Kirari Suleman Nagar, Delhi",
        "Purnia, Bihar",
        "Satna, Madhya Pradesh",
        "Mau, Uttar Pradesh",
        "Sonipat, Haryana",
        "Farrukhabad, Uttar Pradesh",
        "Durg, Chhattisgarh",
        "Imphal, Manipur",
        "Ratlam, Madhya Pradesh",
        "Hapur, Uttar Pradesh",
        "Arrah, Bihar",
        "Anantapur, Andhra Pradesh",
        "Karimnagar, Telangana",
        "Etawah, Uttar Pradesh",
        "Ambarnath, Maharashtra",
        "North Dumdum, West Bengal",
        "Bharatpur, Rajastahan",
        "Begusarai, Bihar",
        "New Delhi, Delhi",
        "Gandhidham, Gujrat",
        "Baranagar, West Bengal",
        "Tiruvottiyur, Tamil Nadu",
        "Pondicherry, Puducherry",
        "Sikar, Rajasthan",
        "Thoothukudi, Tamil Nadu",
        "Rewa, Madhya Pradesh",
        "Mirzapur, Uttar Pradesh",
        "Raichur, Karnataka",
        "Pali, Rajasthan",
        "Ramagundam, Telangana",
        "Silchar, Assam",
        "Haridwar, Uttarakhand",
        "Vijayanagaram, Andhra Pradesh",
        "Tenali, Andhra Pradesh",
        "Nagercoil, Tamil Nadu",
        "Sri Ganganagar, Rajasthan",
        "Karawal Nagar, Delhi",
        "Mango, Jharkhand",
        "Thanjavur, Tamil Nadu",
        "Bulandshahr, Uttar Pradesh",
        "Uluberia, West Bengal",
        "Katni, Madhya Pradesh",
        "Sambhal, Uttar Pradesh",
        "Singrauli, Madhya Pradesh",
        "Nadiad, Gujrat",
        "Secunderabad, Telangana",
        "Naihati, West Bengal",
        "Yamunanagar, Haryana",
        "Bidhannagar, West Bengal",
        "Pallavaram, Tamil Nadu",
        "Bidar, Karnataka",
        "Munger, Bihar",
        "Panchkula, Haryana",
        "Burhanpur, Madhya Pradesh",
        "Kharagpur, West Bengal",
        "Dindigul, Tamil Nadu",
        "Gandhinagar, Gujarat",
        "Hospet, Karnataka",
        " Nangloi Jat, Delhi",
        "Malda, West Bengal",
        "Ongole, Andhra Pradesh",
        "Deoghar, Jharkhand",
        "Chhapra, Bihar",
        "Puri, Odisha",
        "Haldia, West Bengal",
        "Khandwa, Madhya Pradesh",
        "Nandyal, Andhra Pradesh",
        "Morena, Madhya Pradesh",
        "Amroha, Uttar Pradesh",
        "Anand, Gujarat",
        "Bhind, Madhya Pradesh",
        "Bhalswa Jahangir Pur, Delhi",
        "Madhyamgram, West Bengal",
        "Bhiwani, Haryana",
        "Berhampore, West Bengal",
        "Ambala, Haryana",
        "Morbi, Gujarat",
        "Fatehpur, Uttar Pradesh",
        "Raebareli, Uttar Pradesh",
        "Khora, Ghaziabad",
        "Chittor, Andhra Pradesh",
        "Bhuswal, Maharashtra",
        "Orai, Uttar Pradesh",
        "Bahraich, Uttar Pradesh",
        "Phusro, Jharkhand",
        "Vellore, Tamil Nadu",
        "Mehsana, Gujarat",
        "Raiganj, West Bengal",
        "Sirsa, Haryana",
        "Danapur, Bihar",
        "Serampore, West Bengal",
        "Sultan Pur Majra, Delhi",
        "Guna, Madhya Pradesh",
        "Jaunpur, Uttar Pradesh",
        "Panvel, Maharashtra",
        "Shivpuri, Madhya Pradesh",
        "Dudhrej, Gujarat",
        "Unnao, Uttar Pradesh",
        "Chinsurah, West Bengal",
        "Alappuzha, Kerala",
        "Kottayam, Kerala",
        "Machilipatnam, Andhra Pradesh",
        "Shimla, Himanchal Pradesh",
        "Midnapore, West Bengal",
        "Adoni, Andhra Pradesh",
        "Udupi, Karnataka",
        "Katihar, Bihar",
        "Proddatur, Andhra Pradesh",
        "Budaun, Uttar Pradesh",
        "Mahbubnagar, Uttar Pradesh",
        "Saharsa, Bihar",
        "Dibrugarh, Assam",
        "Jorhat, Assam",
        "Hazaribagh, Jharkhand",
        "Hindupur, Andra Pradesh",
        "Nagaon, Assam",
        "Hajipur, Bihar",
        "Sasaram, Bihar",
        "Giridih, Jharkhand",
        "Bhimavaram, Andra Pradesh",
        "Port Blair, Andaman and Nicobar Islands UT",
        "Kumbakonam, Tamil Nadu",
        "Dehri, Bihar",
        "Madanpalle, Andra Pradesh",
        "Siwan, Bihar",
        "Bettiah, Bihar",
        "Ramgarh, Jharkhand",
        "Tinsukia, Assam",
        "Guntakal, Andhra Pradesh",
        "Srikakulam, Andhra Pradesh",
        "Motihari, Bihar",
        "Dharmavaram, Andhra Pradesh",
        "Medininagar, Jharkhand",
        "Gudivada, Andhra Pradesh",
        "Phagwara, Punjab",
        "Pudukkottai, Tamil Nadu",
        "Jamui, Bihar",
        "Kaimur, Bihar",
        "Hosur, Tamil Nadu",
        "Narasaraopet, Andhra Pradesh",
        "Suryapet, Telangaana",
        "Miryalaguda, Telangana",
        "Anantnag, Jammu and Kashmir",
        "Tadipatri, Andhra Pradesh",
        "Karaikudi, Tamil Nadu",
        "Kishanganj, Bihar",
        "Gangavathi, Karnataka",
        "Ballia, Uttar Pradesh",
        "Jamalpur, Bihar",
        "Kavali, Andhra Pradesh",
        "Tadepalligudem, Andhra Pradesh",
        "Amaravati, Andhra Pradesh",
        "Buxar, Bihar",
        "Tezpur, Assam",
        "Jehanabad, Bihar",
        "Aurangabad, Bihar",
        "Gangtok, Sikkim",
        "Vasco Da Gama, Goa",
        "Nawada, Bihar",
        "Patna, Bihar"
      ]
      
      
  const [list, setList] = useState(false)
  const [val, setVal] = useState("");
  const [dat, setDat] = useState({})
  const [fore, setFore]= useState({})
  const [hour, setHour]= useState([])
  const [rise, setRise]=useState();
  const [set, setSet]=useState()

  

  const arr = [];
// 
  const [fal, setFal] = useState(false)
  const handle = (e) => {
    
    setVal(e.target.value);
      debounce(tru,500)
      
      
     
   };
   
// 
   const tru=()=>{
    setFal(true)
    
      }
  
      function debounce(funct,delay){
        let x;
        if(x){
            clearInterval(x);
        }
       x =  setTimeout(function(){
            funct()
        },delay);
    }
   
    const Submit =()=>{
      setFal(false)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=049a286bc9499619754eac4684c2454c`)
        .then((res)=>{setDat(res.data)
          
          setRise(new Date(res.data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
          setSet(new Date(res.data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
         
        if(val!==''){
         
          setList(true)
         
        }
    }).catch(error=>console.log(error));

    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=049a286bc9499619754eac4684c2454c`)
    .then((res)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&exclude=current,minutelyalerts&units=metric&appid=049a286bc9499619754eac4684c2454c`).then((res)=>{
   
    setFore(res.data)
   
    
    
           
    for(var i = 0; i<19; i++){
    var obj = {temp:res.data.hourly[i].temp,
    time:new Date(res.data.hourly[i].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    }
    arr.push(obj)
    }
    setHour(arr)
   
  
    })
       
       
    }).catch(error=>console.log(error));

    
  }
  

  const getData = (lon, lat) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=049a286bc9499619754eac4684c2454c&units=metric`)
  .then((res)=>{setVal(res.data.name);
    alert("please click search icon")
    
    }).catch(error=>console.log(error));
  
    
  }

  const currCityWeather = (position) => {
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
   
 
    getData(lon, lat);
  }
 
  const getlocation = () => { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currCityWeather);
     
    
    } else {
      console.log("err")
    }
  }
  useEffect(() => {
    getlocation();
  }, []);
    function dateBuilder(d) {
    const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
    
    const date = [];
    
    
        for (let count = 0; count < 8; count++) {
          if (d.getDay() + count < 7) date[count] = d.getDay() + count;
          else if (d.getDay() + count === 7) date[count] = 0;
          else if (d.getDay() + count === 8) date[count] = 1;
          else if (d.getDay() + count === 9) date[count] = 2;
          else if (d.getDay() + count === 10) date[count] = 3;
          else if (d.getDay() + count === 11) date[count] = 4;
          else if (d.getDay() + count === 12) date[count] = 5;
          else if (d.getDay() + count === 13) date[count] = 6;
          else if (d.getDay() + count === 14) date[count] = 0;
        }
    
        return [
          days[date[0]],
          days[date[1]],
          days[date[2]],
          days[date[3]],
          days[date[4]],
          days[date[5]],
          days[date[6]],
          days[date[0]]
        ];
      }
      const weeklist = dateBuilder(new Date());
    
      const Ret = ()=>{
  
        return (
            
                val!==""? <div className="bada">
                {array.filter(item => {
                           if (!val) return false
                           if (item.toLowerCase().includes(val) ) {
                             return true
                           }
                         }).map((item)=>{
                           return (
                             <div  className="item" >
                            {item} 
                            
                             </div>
                           )
                         })}
                            </div>  :""
        
        )
        
       
       
      }
      const srs=[{Sun:0,b:rise}, {Sun:5,b:"1:00pm  ☀️"} ,{Sun:0,b:set}]
   
     
     
    return (
       
        <div className="second">
          
            <div className="inBox">
            <span className="spnl"> <FontAwesomeIcon className="font fa-2xl" icon={faLocationDot} /> </span>
            <input
            value={val} 
            onChange={handle}
            className= "inp"
            placeholder='Type location'
            onKeyPress={(e)=>{if(e.key==="Enter"){e.target.value="";Submit()}}}
            />
             <span onClick={Submit}  className="spns"> <FontAwesomeIcon className="font fa-2xl" icon={faMagnifyingGlass} /> </span>
            
            </div>
            {
      fal===true? <Ret/>:""
    }
    
     <div className="main">
     
        {list?  <div className="left">
        <div className="week">
               <div className="up">
                 {weeklist.map((e , ind)=>{
                    return (
                     <div key={ind} className="weekName">
                     <p>{e}</p>
                   </div>
                   
                         )
                        })}
                    </div>
                    
                    {fore?.daily?
                   <div className="down">
                     {fore.daily.map((e , ind)=><div key={ind} className="weektemp">
                   <p>{e.temp.day?e.temp.day:""}°C</p>
                   <img src={ `http://openweathermap.org/img/wn/${ e.weather[0].icon}.png`} alt="" />
                        <p>{e.weather[0].main?e.weather[0].main:""}</p>
                         </div>)}
                          </div>
                           :""}
                                 </div>
<div className="name">
    <div className="name1">
    <h3>{dat?dat.name:""}</h3>
    </div>
  
    <div className="clouds">
    <h1> {(dat?.main?.temp - 273.15).toFixed(1)}°C</h1>
   
    <img className="icon" src={ `http://openweathermap.org/img/wn/${ dat.weather[0].icon}.png`} alt="" />
  </div>
    
 </div>

  <div className="chart">
    <AreaChart
      width={720}
       height={300}
        data={hour}
        
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis  />
            <Tooltip />
         <Area  dataKey="temp" stroke="blue"  fill="transparent" />
         
            </AreaChart>
        
     </div>
    <div className="pressure">
    <div className="pre">
        <div>Pressure</div>
        <div>{dat?.main?.pressure} hPa</div>
    </div>
    <div className="pre">
        <div>Humidity</div>
        <div>{dat?.main?.humidity}%</div>
 </div>
</div>

<div className="pressure sun">
    <div className="set">
        <div>Sunrise</div>
        <div>{new Date(dat.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        {}
        
        </div>
    </div>
    <div className="set">
        <div>Sunset</div>
        <div>{new Date(dat.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
 </div>
 
</div>
<div className="chart">
    <AreaChart
      width={720}
       height={300}
        data={srs}
        
        >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="b"/>
        <YAxis  />
            <Tooltip />
         <Area type="monotone" dataKey="Sun" stroke="orange" fill="orange"  strokeWidth={4} strokeOpacity={5} />
         
            </AreaChart>
        
     </div>
</div>
:<div> 

</div>}

<div className='map'>
         
         <iframe 
         
        id="gmap_canvas" src={`https://maps.google.com/maps?q=${val}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        height='300px'
        frameborder="0"
        scrolling="no"
         marginheight="0" 
         marginwidth="0" >
       </iframe>
   
  </div>
</div>

</div>

    )
}