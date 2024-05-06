import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jsonData from "../READ/data.json"
import userAvatar from "./assets/images/image-jeremy.png"
import work from "./assets/images/icon-work.svg"
import play from "./assets/images/icon-play.svg"
import study from "./assets/images/icon-study.svg"
import exercise from "./assets/images/icon-exercise.svg"
import social from "./assets/images/icon-social.svg"
import selfCare from "./assets/images/icon-self-care.svg"
import ellipsis from "./assets/images/icon-ellipsis.svg"

function App() {
  const [userData, setUserData] = useState();
  const [isLoadingComplete, setIsLoadingComplete] = useState(null);
  const [day, setDay] = useState(null);
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsLoadingComplete(false)
      setUserData(jsonData);
      console.log(jsonData);
      setIsLoadingComplete(true)
    }

    fetchData();
  }, [])


  return (
    <>
      {isLoadingComplete &&
        <>
          {week &&
            <div className="container lg:w-[80vw] w-[90vw] h-fit md:absolute top-0 left-0 right-0 bottom-0 md:m-auto mx-auto my-4 grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-6 gap-4">

            <div className="userPortfolio row-span-2 bg-[#1c1f4a] flex flex-col rounded-xl">
              <div className="userDetails bg-[#5847eb] w-full h-fit p-6 rounded-xl flex flex-col gap-6">
                <div className="userAvatar bg-white p-[3px] w-fit rounded-full">
                  <img className='w-16' src={userAvatar} alt="" />
                </div>
                <div className="userName text-white flex flex-col gap-2 pb-6">
                  <p className='text-xs'>Report For</p>
                  <p className='lg:text-5xl text-4xl font-thin'>Jeremy Robson</p>
                </div>
              </div>
              <div className="userUpdate flex flex-col gap-3 px-6 py-4 text-[#6f76c8]">
                <p onClick={() => {setDay(true); setWeek(false)}} className='cursor-pointer hover:text-white'>Daily</p>
                <p className='text-white'>Weekly</p>
                <p onClick={() => {setMonth(true); setWeek(false)}} className='cursor-pointer hover:text-white'>Monthly</p>
              </div>
            </div>

            <div className='work bg-[#ff8c66] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="work-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={work} alt="" />
              </div>
              <div className="work-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="workTitle flex justify-between items-center py-4 px-6">
                  <p>{userData[0].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="workDetails px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[0].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[0].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='play bg-[#56c2e6] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="play-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={play} alt="" />
              </div>
              <div className="play-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="play-title flex justify-between items-center py-4 px-6">
                  <p>{userData[1].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="play-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[1].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[1].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='study bg-[#ff5c7c] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="study-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={study} alt="" />
              </div>
              <div className="study-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="study-title flex justify-between items-center py-4 px-6">
                  <p>{userData[2].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="study-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[2].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[2].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='exercise bg-[#4acf81] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="exercise-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={exercise} alt="" />
              </div>
              <div className="exercise-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="exercise-title flex justify-between items-center py-4 px-6">
                  <p>{userData[3].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="exercise-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[3].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[3].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='social bg-[#7536d3] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="social-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={social} alt="" />
              </div>
              <div className="social-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="social-title flex justify-between items-center py-4 px-6">
                  <p>{userData[4].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="social-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[4].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[4].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='selfCare bg-[#f1c65b] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="selfCare-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={selfCare} alt="" />
              </div>
              <div className="selfCare-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="selfCare-title flex justify-between items-center py-4 px-6">
                  <p>{userData[5].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="selfCare-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[5].timeframes.weekly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last week - {userData[5].timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            </div>

          </div>}

          {day &&
            <div className="container lg:w-[80vw] w-[90vw] h-fit md:absolute top-0 left-0 right-0 bottom-0 md:m-auto mx-auto my-4 grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-6 gap-4">

            <div className="userPortfolio row-span-2 bg-[#1c1f4a] flex flex-col rounded-xl">
              <div className="userDetails bg-[#5847eb] w-full h-fit p-6 rounded-xl flex flex-col gap-6">
                <div className="userAvatar bg-white p-[3px] w-fit rounded-full">
                  <img className='w-16' src={userAvatar} alt="" />
                </div>
                <div className="userName text-white flex flex-col gap-2 pb-6">
                  <p className='text-xs'>Report For</p>
                  <p className='lg:text-5xl text-4xl font-thin'>Jeremy Robson</p>
                </div>
              </div>
              <div className="userUpdate flex flex-col gap-3 px-6 py-4 text-[#6f76c8]">
                <p className='text-white'>Daily</p>
                <p onClick={() => {setDay(false); setWeek(true)}} className='cursor-pointer hover:text-white'>Weekly</p>
                <p onClick={() => {setDay(false); setMonth(true)}} className='cursor-pointer hover:text-white'>Monthly</p>
              </div>
            </div>

            <div className='work bg-[#ff8c66] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="work-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={work} alt="" />
              </div>
              <div className="work-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="workTitle flex justify-between items-center py-4 px-6">
                  <p>{userData[0].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="workDetails px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[0].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[0].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='play bg-[#56c2e6] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="play-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={play} alt="" />
              </div>
              <div className="play-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="play-title flex justify-between items-center py-4 px-6">
                  <p>{userData[1].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="play-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[1].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[1].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='study bg-[#ff5c7c] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="study-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={study} alt="" />
              </div>
              <div className="study-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="study-title flex justify-between items-center py-4 px-6">
                  <p>{userData[2].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="study-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[2].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[2].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='exercise bg-[#4acf81] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="exercise-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={exercise} alt="" />
              </div>
              <div className="exercise-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="exercise-title flex justify-between items-center py-4 px-6">
                  <p>{userData[3].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="exercise-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[3].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[3].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='social bg-[#7536d3] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="social-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={social} alt="" />
              </div>
              <div className="social-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="social-title flex justify-between items-center py-4 px-6">
                  <p>{userData[4].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="social-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[4].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[4].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='selfCare bg-[#f1c65b] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="selfCare-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={selfCare} alt="" />
              </div>
              <div className="selfCare-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="selfCare-title flex justify-between items-center py-4 px-6">
                  <p>{userData[5].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="selfCare-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[5].timeframes.daily.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Previous Day - {userData[5].timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>

          </div>}
          
          {month &&
            <div className="container lg:w-[80vw] w-[90vw] h-fit md:absolute top-0 left-0 right-0 bottom-0 md:m-auto mx-auto my-4 grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-6 gap-4">

            <div className="userPortfolio row-span-2 bg-[#1c1f4a] flex flex-col rounded-xl">
              <div className="userDetails bg-[#5847eb] w-full h-fit p-6 rounded-xl flex flex-col gap-6">
                <div className="userAvatar bg-white p-[3px] w-fit rounded-full">
                  <img className='w-16' src={userAvatar} alt="" />
                </div>
                <div className="userName text-white flex flex-col gap-2 pb-6">
                  <p className='text-xs'>Report For</p>
                  <p className='lg:text-5xl text-4xl font-thin'>Jeremy Robson</p>
                </div>
              </div>
              <div className="userUpdate flex flex-col gap-3 px-6 py-4 text-[#6f76c8]">
                <p onClick={() => {setMonth(false); setDay(true)}} className='cursor-pointer hover:text-white'>Daily</p>
                <p onClick={() => {setMonth(false); setWeek(true)}} className='cursor-pointer hover:text-white'>Weekly</p>
                <p className='text-white'>Monthly</p>
              </div>
            </div>

            <div className='work bg-[#ff8c66] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="work-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={work} alt="" />
              </div>
              <div className="work-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="workTitle flex justify-between items-center py-4 px-6">
                  <p>{userData[0].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="workDetails px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[0].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[0].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='play bg-[#56c2e6] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="play-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={play} alt="" />
              </div>
              <div className="play-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="play-title flex justify-between items-center py-4 px-6">
                  <p>{userData[1].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="play-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[1].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[1].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='study bg-[#ff5c7c] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="study-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={study} alt="" />
              </div>
              <div className="study-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="study-title flex justify-between items-center py-4 px-6">
                  <p>{userData[2].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="study-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[2].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[2].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='exercise bg-[#4acf81] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="exercise-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={exercise} alt="" />
              </div>
              <div className="exercise-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="exercise-title flex justify-between items-center py-4 px-6">
                  <p>{userData[3].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="exercise-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[3].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[3].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='social bg-[#7536d3] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="social-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={social} alt="" />
              </div>
              <div className="social-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="social-title flex justify-between items-center py-4 px-6">
                  <p>{userData[4].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="social-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[4].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[4].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

            <div className='selfCare bg-[#f1c65b] md:h-full h-[180px] overflow-hidden relative rounded-xl'>
              <div className="selfCare-img flex float-end relative w-16">
                <img className='absolute top-[-9px] right-4 z-0' src={selfCare} alt="" />
              </div>
              <div className="selfCare-card w-full h-full bg-[#1c1f4a] absolute top-10 right-0 rounded-xl flex flex-col gap-2 text-white hover:bg-[#34397B] cursor-pointer">
                <div className="selfCare-title flex justify-between items-center py-4 px-6">
                  <p>{userData[5].title}</p>
                  <img className='w-3 hover:w-5 cursor-pointer hover:text-white h-fit' src={ellipsis} alt="" />
                </div>
                <div className="selfCare-details px-6 flex flex-col gap-2">
                  <p className='lg:text-5xl text-4xl font-light'>{userData[5].timeframes.monthly.current}hrs</p>
                  <p className='text-sm text-[#bdc1ff]'>Last Month - {userData[5].timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>

          </div>}
        </>
      }
    </>
  )
}

export default App
