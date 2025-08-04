import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Zap, Award, ArrowRight, Building, Code, Search } from 'lucide-react';

const About: React.FC = () => {
  const teamStats = [
    {
      icon: Users,
      number: '10',
      label: 'Team Members',
      description: '5 recruiters + 5 job application specialists'
    },
    {
      icon: Target,
      number: '500+',
      label: 'Developers Placed',
      description: 'Successfully placed in high-paying roles'
    },
    {
      icon: Zap,
      number: '18',
      label: 'Average Days',
      description: 'From signup to job offer'
    },
    {
      icon: Award,
      number: '$145K',
      label: 'Average Salary',
      description: 'Mean placement salary across all roles'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Performance-Driven',
      description: 'We only succeed when you succeed. Our compensation is directly tied to your career outcomes, ensuring complete alignment of interests.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'While others take months, we deliver results in weeks. Our streamlined process eliminates bottlenecks and accelerates your job search.'
    },
    {
      icon: Users,
      title: 'Personal Partnership',
      description: 'You\'re not just a candidate to us. We build genuine relationships and invest in your long-term career success beyond just one placement.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Martinez',
      role: 'Lead Recruiter',
      specialty: 'Frontend & Full-Stack',
      avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xAA7EAABAwIEAwUFBgYDAQEAAAABAAIDBBEFEiExBhNBIlFhcYEHFDKRoSNCUrHB0RUkMzTh8FNicqJD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EACcRAAICAgICAgICAwEAAAAAAAABAhEDIQQSMTITQQVRIiMUM2FC/9oADAMBAAIRAxEAPwDKcY/uXeaHFyIYt/cu80OctHle7FcHojuY96WZcC6lgwrpXXEiosk9A3U7DIefMGoc3dG+Hh/ONRcW5As2olnoKEQBpLb6J2txemo3BrzZ3dZTHPyQFUXiGZz6nN3I2eClBti+GbUkiyScV01rMeT6ILiGOxzE2Kr8cctRI2OJpfI42a0bkokYoaB2UBs1SN3EXYw9dOpWesUUaHZtEOaodM7sgLsbUWnjlbhUNQZL8wm4ytAbroNB5IU2aUG4Obv62RH4LY2ou5DnLuvcUNzsE5C5lQHBvYkAva+jv2T0ANrdb7IM20bXEhiyvQf4diaIgXbq5UNS2MgEjRUegkDKVtnWKj1NbKC+0rx5OWzi48cuJWY/5N/Dk0jVYa2Jz8t2qeHMezcfJYG3EKz33sVU41/5D+6umB1VQ9nbqpnf+nu/dILgrs9iU+U40qLVjsTTCVRpsDfK50jNiVZp8z2dt7nf+nEqdSwsMHomseJY0LTn8jMyxLDXwXQRxcCQSdFpXEUDBTvPgs3q7893cozeE0XwO20xtK5XEglkxsnYt/cu80OciOL/ANy7zQ47o3K92BweiOheui8tXonRADHklcuuFJUZJ6jF3Kw8NsvWNVfjNnKxcNOHvjdUbF7As3qXCdn2BVAx0Hn28VokwvAbKgY5EZK8Qg2zPtdNT9GK4/8AYgrwhheankrLEFzS0PG4b4eJ2v0F0ExMATyck/ZB1g7vKtceLU+F4PJG11swDGtG4b/kD6qrtqffahjMoDGkkADYrMbfk1Er0OUdDiFdStghY90bTfKBpdPwcKYs514oDzG6gO0urjw60Na2zeyr1h0DZAUq88u1D3+JFRtmGOoZo6t94XwyR/HE4doHqAi38P5lEaiE5iG5gRpmHX5LTuMOGo6uhdV0zB77TjmMcNC8Ddh8/wA1QKOcU8pp4/6M7RJECfhvu35/qiX3RXFJ4MikgZTP/lzba6F1Dzd48UadByeYxvw37KC1Qs94Pet3iP8AqAflmpyUiBBrVBXrAAeWqNTD+aHmtAwBg5DVXF4kYvI9kFJQco0ROkH2HoocjOyETpGfYei6XgrFbK3xGD7s/wAlmlQPtnea1DiVtqV/ksvqf670HN6INg92NWSsvS9WSo2OV0gkkLh1UJ26dLri5TR3Rc0uzsrjXVUIFdJXlJCssJdC4uhVJOt3Rzht1q0IG3dG+GxetCPh9gOb0L2538v6KnV7L4kJHfC0/K+n7q4Fv8v6Kp4z9kztC3Nefp/pR8rqDAYItzTA+JSmaLNYWMx9B0HysmqF3LlY6x32A1UujpnVGGtG7nzNP++iIwcP1c8JmoXtfK3TKNys2UklTNbHCTdosOC41h0cjIpZXQk7CVpb+a0TCaiI3kZI10dgQQVmPDeC11UyojxeJ8rMvYbOPvd1zsjHs6ndHimIYY+wp48zoW3vbVKygltDsZykqkaBiWM4XSENrKyKNz9mOOp9Fj2MZIsTeIXgshqnBp/6SAlv1Vt4gosWhxoHD6eBsch7UwhD3n5qjY5UV7cdnjxfKJHBrRZuXs6hpt39UXH+wGTWh9tS2pD3jYm6C1Q7b/NTsPdlp7O3dqolSLueVucWP9Ypz5pxgD6b+7HmtBwA/YNWf0o/m/VX/A3BkDblRj8MyuR7INyHshFKQ2g9EFkmbYaotSuHu+/RdIiPkB8Tm1K/yWW1J+3d5rT+JyPdn69Fl9T/AF3eaDm9EGwe7ONTg2XhgTiVHKGahhjkLSmiiOMR5ajuQ8iyLyIdJtFMcu0EzykkkglxBdC4uqDj03dHeGRetbZARuimDTmnnzhGw+wHN6M0jl5o2sBFyqrxdCBW01JTnOACBbqbf5UiPFn2BB7Vu9couUKlldVkP5WbI0n7x1VuU60ieIlTYPxUswuXDqJluaHNdLbpfS31KLcO4o2Ov5DtDcgEdVUsYlklxCSZ5u4uuT4n/QiXDLW1WO07Zn5Q87jvSGWHaJo4J9ZUafi2M0OG4Q6arkGdzbRgHVyrfs7kbUY3UztGVxFuWSq3xO+ebF5qasp5SIXlrDGbgjoflZHOC8I91rWVMcOKGSx7Bjs0667boPSoDfZyn/w0t2IUgrGUdQ8xyEZm3Gjh1t5Kke1+jpfc6OshsZGy8vN+IEE/ojGMCXEXNoxQzxVNO4SMn0tESDoT4228VTvaPVvNbQ4eX5msAkfb8RNgqYk+xGZJQANi2ipSwfdIPmmJG9g33UyrvFRwZtLtuFCfMC0+K9RwpJ4VZ5/ldvkoHwnJVk9xVkosRMYGo0VVkfaoJHenm1BHVLRyqLaK5cLnTRaKnF3dkhw0KL0nEANOAXbLPJZ3EjXQLsdY9mziu+eLZRcaSVplvxvFhOwtDuipkzg6Zzrbr1JVOfpdMgoOaakqQxgxuG2PNXopoPSL0sxoJY4bz3QpyI4w7MW96GWJTnN/2i3H1jQkl3KVwgjdK7CnF1cSVST0zUgI3hlC6VzcgKCxf1G+avvCsLHsDnWui4/2L5/pDIwp7Mrizv1UbFAaZkDWEBrbFwHW+iu2IQj3QsjA2VD4mLqeeKIi92gDvJ0Q80uzD8RVBgmdoe+oB6tzeWiZoql0E7JAe2w3FlIaDJUyEjT4SPRDeW57zkB0Q9VTD207RbZW1uNVYrqGRpmLRnYToQr7gT8e91jjNmAXDi2fTXfxWU4T7+Khho2uz326Fa3hFRjNPQtkqKenYwNuftNflZLZdaQ/hnq6C0z4cKw6SSskAsM8kj9FjNVi0eM8TurpL8kysaxp3yA2C9cY8UVuOVLqZx5VMx9uW0/GR1P7IFAcolbsdCD3WN/0RMeOlYtly9pUi0cWXZS0rmgfDl06bKruqDaysFLOcXovd5Ac8euYC9/NRK7BnwxkuLXPuPh6prFyHCPUXy4+z7AIuJJPekvUsZjdrsvA1XN27BHbpL1yyvJFtCuOOJLqSgk4kkkuOJFTLzCNSuwxXTI1IROhjuWhMpvLO2Bl/GOhv3bsXsFEmbl0R6raGMCCVR7StlioojG22RUl0alSY4EqlYZuiPFo8Eq4cOVjYyGk21VZlhtYqZhbah9SyOlhklkcdGNF7qyfXyClH5PBpU9fHHC2Q6i3XqqTiTn4linvjWXZGCIoz99w7/C/XwRDiCjxGgw2GOoMcjpCCYYj2oz423QSiE/KkqH/ABt7EUfRp6uPl+aBOSe0N4sfSNMbqWPoIpDK8PndcaHqd0U4LooK2ps+xIFyLKtV8ji4Mc65B7XmjPBVaKTE25jYFUmn0sLjku9GqUuBUlLUEsiAva2XZTsYLKfDpQ2/wEfRT4bTU0UsevZGoQTHHOfBODYAA7myWSd7G20YXWE+9yu/7FORNDg2+mY6n0Tdd/dzC97OK6+7aZlup/JO/Rn/AGyVSVEtMXRteWF1g7W11YftpHZ8kskckVi5zri6qkUhebEX8VaMGpm4gMgqHUz27MYLMd4270OVR2Fx3JADE7cwmw3UKEXfYhXJ3A2I1l5IK2jeDtYu/bdBMU4cxfAznrqVwhJ0mZqz59ESE4t1YHJjkldETlqNNGc2ilRSX3UmOFshTPW0I/I4PYI5b10RORo0rQucho2UfER/koDcp3VehCSp00YDk5HEC1SsZZ5tAqMG+yI00pjCitFjr0XvNbZEgupeeyTU1Tn9ENlJc66eLiUg0bqJpzOjURqMG+yMYTSVGIVcdJRwPnnk0bGwXJQ8WGwWi+xx0UeKYjUyN1ihYA7qLk6D5BClHorLr+bolU3s1tAH4zWlkxFzFTWs3zcRr6I/hGB0OEUpho43B7vilJu5/meimVuKirqzHGba7IrSxMdGLjWyzcmWUmaeLDCCsy3iuWOjqHNbSyx1bnWjke+7LEi5HiqlWTuhxFlPTv7EZ1v+K2pPfutj4zwymqcIkkma1r6f7VjvELHI6CSZ09bIQ1ti8AnXU6BXxPVMrlTu0D6yBoneI38yNp+IG9yvFMwukEYOUuNgVNZGDh0smUAl4AcOqbgpw4Oe6TKWC7QQbuKN2F+r8jgxTFKBxZBX1UOU5SxshsotViFZVkmoqp5Cd80pK8TudLK97vic7XxTdldJA5NjZFhYJ8uEkAaTs5NuGi8A20GylkJ0INduEUweqnp5WPbYsB1FlAjbc+CNYLR82pa3tC9ulw5DyNVsPii70Xzgycu4jdDDKDTzRcx7SCLu8LrRZcPp6ykkp6qIPheC1zSL3BVC4doTS8TU72Myx8k6gbnrfxWlwjsJR+dDT8bPnHizBncO8QVGHFxdGDnhcR8TDt+yjUslrLRfbbhl/wCG4mxvazOp5CO74m/qs2ptCLrVwSuNmNyopNomSylRnSlPTbaKLuSitiuOKPD33IUuE9hRXMNtk7E45VEbLyprRBnktM+2ya5i8uJNydyvKDKbbHFFUOZ17bIEwkoU2c4okGQK9+zKccvEmN+MlhPks8Vq9nVSYcZmivYSwH1IP+Sq5ZNxoviSUy+UwIrc9zqrlh7yYxfeyodNVH33LfS6vOFuDmDyWW/Y1pepV/aTiL4DQULfhqXEvHeBbT6rO8WcGRVr2nsulDRbw6BXT2s5oq3C5xqGiQA9xFv99FQqrt4OJ3912jvcTumIL7ATl9DlFPBT4RncGSSg3LTqGi+l+9Rqia9XE5xF3jtG2hKZfGY6ZkP4hnd+iYmI5QY8HPG63kjUAvSPE7SydwcdnHT1TfQeqk1PbDJLg3aAT4piRpYQ13xbkd10VAJHk7JpwsU8vLmqSqPVJI1kgzWt4i6sVLA59O6aki7Fu3ygQWno4KsuZcXB1UrDa2Wkn0nkiDtCWu/RDnGw2OdaL/wzi9W/EaF1VK2QsfkE8emYdzh3rY6dwMY8VgnD0j3VNRJTAS3cHWOly22vqtswWpM1K05S3YWvdJy1Khym4WCvaVQis4Qrwd4W+8N82a/ldYTCW5l9H44xs2E1kbxdroHgj0K+ZIHlrGk32T3GyVFoz+Vi7NUFZSC3RR42dpePeARoV5Eut7pruhD4pR0EHQjl30ULMGkhJ9SclrqGZCSulNHQxS+xrLdeS2ydC4+yDQ6NWSsupKpx5U/AaoUWMUk7jZgkAdr0Oh/NQSuEXBC45OmabJmgr9dO1dX3BJs0TT4d6obM1bhFBW7ukhaXEfitY/UK08N1BdCGncLOyqpGtj/lA77S6NlXw1LNpzKR4lBPQfC76ErJ6kXweGJpvY3t67raOJYvfMCr4Ny+nc0Dv0KwSCuLadjHAlzHaeLTuEbErQvldS2T4G2fUz3zGFhdboCNh80Jc97pHvJu55ufFPMrHxxzxtbYS9b9FHCYS2KzlpUPwSCJjjlDgToD+LvTbiXuzOJJO64fokFYo3Z1K6SR3UkCskWgk33710arvVccHuEq5tLUNY6wOYjuv3LcMBnMtNG8xujcBqHAa+q+do3Froz+F4PmvoDhqcPw6ItOuUJLkQ6ysfwT7QoO1DBLBIw7OaR9F87S4QY3GLW7CWkeWi+imm41WNY3TcjHa6Kx0md9dU7+OqTkmZ/5NygouJU3YVJ0CaOGzjYH5K1Mj8E82MdQtB4IMzY8jIUx1BUD7pPomn0sjHWLdVeuWwbtCBYkW+9GwGyq8EAi5EysXXCVxcKSsfEUlxJQcd3XsNXlu6kMaNyFxKRpPCOWo4Wpm7mMvb/9E/qjGESCOdzDoq77PqkHB6uE6mKW49R/hEY8QoqWpPvVW10xdYQw9qw8T3+CRzRbejT48l1LqXB8ZG4tZYLxDRuwzGqylLbBspLPI6hbA3F3dhrqWenicNJXsP5bqtcdcLVmL1MWI4cYZH8vJI3NbMBsQuwNweyOTj7RtGZdLL01PV1DVYfMIq6B8MhFw1yjp27MxprTPZSXAugqThJJFcXHHpq9X1Xi9rEm3midJgOLVsT5qagmLG2N3MIv5d660vJKTfgg37B8FtXAVVzsLh6kNsVlcnDeLU8kjaiieI4yQ97SHNuPELSPZrf+EjvzFK8mnFMb4um0zQI9QqBxpRiPGXTWsJWA+o0V+jOip3tFBjZTS9dW/kr8CVZkv2C/JRTwN/oqLi1uiQeEBq65zXkXK9Uta53Vb2vB56pVYbleMirlY+85KLSzXi31QOoN5FWSomDtgOy5ZOWSsszqbFjdkrJyyRauo6zw3RPA6JstsuKtFkyz8F1zaeprKd7y1s0NxZtyC3ew6lFaDFat08jOG8KjblOWWskZ9o7xc46N8h8lTsOqjRVsNSNTG4Eix1b1Hy8Ubxyurm1MEdTMfcH9sNpjkDh8rXIt3oco/YfHPRcsBnxGMyirrqevqPjdEDmLfDNsjrhFII5o6WSF0jQ4kaa+KzOhxOldMP4fhMjXB33J5CbdfvalX+nldyWT09Q9sYFnQTN2HcDv87pTIq8mljl2VoEcdYO/E8JEsQDqmmBe2w1c37zfNZaOi3UzsmjsyJ77adkWH1VQm9nrKqslnE8lPHI4u5TQDlv4+avizKOmL8njynLtEzpdbq4AbnoBclahS+zrDmFvNdPN33fYfQKzYZwthtCP5eliaf8Azqrvkx8IAuJL/wBMx6g4exXEHAU1DLlP3pBlH1Vowr2bVMtjiFSIx1ZELn5lao2mYzQMDR4J0NY0Kkss2EjhxxK5g3BWDYZZ8dK18v8AySjO4eRO3orLSxsBs3QDovDnAA/CAOpQqp4jw6gmDKqqja46BoNyfQIW35YZLWkPY2KSmqGSTEMZUHlOHRxPXzQbhCndQmopLXMU7mi3d0XquxGhx2qp6anifMY5Ob2oiA0t2OvijWBYWaRkkkz800rzI/wJO1+tlSfii8XV2GIzoqb7TJhHh1M49ZiPorjfIVnvtgJbgdKW7+8D8imOLLrlTFOXHvikjNa2ZrpDYr3RP1CF9vcqZRusQtqGS5GLPF1hQbc67UMmN3lS812lQ5fiR5u0K4o0DLJLqSSo0rFZJJdXUdZyyWVdSuuo6xZUaw+WOsw8Uk13Opzdl+rf8ILdO0tQ6mqWSjYfEO8dVSULQSE6YVjhqIKvmU5aw9zTuFdsLrKuSMc9htbQnqqVVVJp5mPAu13VXTAK5k8EbXPHZFteqzs8Wa3Hkq0WOme7KLt6ohFIANRZD2TMYwWLT6rw+pjI0dqe4pdIvLbDTKiMbkJGvY3YIK2SMjV+q5LVU8TC57wB33V7ZRxQWNfmJAKh1OKiIgAgv6NGpPohbqmonAbA3lRH7xGp8koKqGhJyQnOd3uFyfVSSkSHw19YHGpeYmO2Y09r1Qs8MwxSGSKSdrybk3zE+upRB2PxMHbBHoux8QQSGzd/K6psumcoQ+gc7lxPJdbM86k+ZRaDEpnbscPRQG4q1x0bbxItdSYa+E//AKNXHN/VBqB73tJdp5ql+1ItfQ0UbiD9qT8h/lWGPE4T2WvHzVO9pVQJHULA4E9p1gfJNcOP9yEua6wNmfVbQ3bZMQO1T1W66ixmxWtN1Ix4K47CjXdhMv3Sjd2V5cdUW9AVGmf/2Q==',
      experience: '8 years in tech recruitment'
    },
    {
      name: 'Marcus Chen',
      role: 'Senior Recruiter',
      specialty: 'Backend & DevOps',
      avatar: 'data:image/jpeg;base64,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',
      experience: '6 years at top tech companies'
    },
    {
      name: 'Jennifer Park',
      role: 'Application Manager',
      specialty: 'Job Matching & Outreach',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GS8Kf9mfBEfjQ1E2nzLGCOvg7O_YAUASag&s',
      experience: '5 years in talent acquisition'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              We're Not a Traditional Agency
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're your dedicated job acquisition team, committed to transforming how developers find high-paying opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Born from frustration with traditional recruitment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  The Problem We Saw
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Traditional recruitment agencies charge developers thousands upfront with no guarantee of results. 
                    They submit generic applications, provide minimal support, and often leave talented developers 
                    stuck in lengthy, frustrating job searches.
                  </p>
                  <p>
                    Meanwhile, developers spend countless hours writing cover letters, filling out applications, 
                    and navigating job boards—time that could be better spent preparing for interviews and 
                    improving their skills.
                  </p>
                </div>
              </div>
              <div className="card p-8 bg-blue-50 dark:bg-blue-900/20">
                <div className="text-center">
                  <Building className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Westernpress Division
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    While Westernpress operates in multiple sectors, our Tech Talent division is 
                    exclusively focused on developer recruitment with a revolutionary approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c896] text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dedicated professionals with deep tech industry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-[#00c896] font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {member.specialty}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  {member.experience}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 px-6 py-4 rounded-lg">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-900 dark:text-white font-medium">
                Plus 5 dedicated job application specialists working behind the scenes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We're Different
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A fundamentally new approach to developer recruitment
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-[#00c896] text-white text-center">
                    <Search className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Daily Applications</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    We Apply, You Interview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    While traditional agencies might submit a few applications per week, our team applies to 
                    20-50 carefully selected positions for you every single day. We handle the tedious work 
                    so you can focus on what matters: landing the job.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-blue-600 text-white text-center">
                    <Target className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">No Upfront Fees</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Risk-Free Partnership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Unlike agencies that charge thousands upfront, we only get paid when you successfully 
                    land a job. This means we're genuinely invested in your success—we literally can't 
                    succeed unless you do first.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-purple-600 text-white text-center">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Dedicated Team</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Your Personal Job Acquisition Squad
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    You get a dedicated recruiter plus access to our application specialists. We're not 
                    juggling hundreds of candidates—we limit our client base to ensure personalized, 
                    high-quality service for every developer we work with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the developers who've transformed their careers with our dedicated approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;