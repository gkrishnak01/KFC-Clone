import React from 'react'
import './stories.css'
import TimelineCard from './TimelineCard'

const Timeline = () => {

    const timelineData = [
        {
            image : 'https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/p720x720/245117613_4861728797190976_1228297225148835773_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=9e2e56&_nc_ohc=1k3U67fehOYAX8oHC2I&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&oh=26d306bb699a5d3454eccb67e6fae57e&oe=61686188',
            desc : 'Is this your favourite order ?',
            hashtags :'',
            postedOn : 'Posted On: 09 Oct 2021 4:27 PM'
        },
        {
            image: 'https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/p720x720/244677910_4855473877816468_8723015718766990328_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9e2e56&_nc_ohc=BEQMkNhKJoQAX8jcxzl&_nc_ht=scontent-bom1-1.xx&edm=AKK4YLsEAAAA&oh=f8ca9de86271ff6e179336f63ade4834&oe=61680BD7',
            desc : 'Pictch perfect crunch. Ordering ?',
            hashtags : '#IPL2021 #CSKVPBKS #KKRVSRH',
            postedOn : 'Posted On: 07 Oct 2021 5:19 PM'
        },
        {
            image : 'https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/s720x720/244606172_4851707681526421_459756209101364218_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=9e2e56&_nc_ohc=1V_HkwRPbl0AX-bmB4G&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&oh=80d74611412862a5bf3e1f4f2e532107&oe=616905E5',
            desc : 'Great Bucket Game. Food and Travel',
            hashtags : '#kfcbuckets #kfchotandcrispy #stripsbucket #chicken #friedchicken #chickenbuckets, #kfc #foodies',
            postedOn : 'Posted On: 06 Oct 2021 12:21 PM'
        },
        {
            image : 'https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/s720x720/245400864_4871554439541745_5427531552720914812_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=9e2e56&_nc_ohc=RqHYKkunx6MAX9DTPns&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&oh=8da07711de0637344721cad39d73f709&oe=6169F7EA',
            desc :'How’s the Pujo-sh? Crunchin’ good, sir! #KFCPujoSpecial #SwadeyUtsobeKFC #kolkata #kolkatadiaries #pujovibes #kolkatablogger #REPOST @kolkatadelites with @get__repost__app Festivities call for celebrations, and for me, any celebration is incomplete without indulging in some KFC. Adding more spice and zing to this years celebrations is a special offer where can get your hands on either 4+4 chicken strips or 6+6 Hot & Crispy bucket. Well, what then what are you waiting for? Spice up your Pujo celebrations with some craveble KFC chicken aar mete otho swade o utsabe',
            hashtags : '#kfcpujospecial #SwadeyUtsobeKFC #repostios #repostw10 #KFCPujoSpecial #SwadeyUtsobeKF #kolkata#kolkatadiaries #pujovibes #kolkatablogger #REPOST #kfcpujospecial #repostios #repostw10',
            postedOn : 'Posted On: 12 Oct 2021 5:41 PM'
        }
    ]

    const timelineContent = timelineData.map(each => <TimelineCard each = {each} />)
    return (
        <div className = 'storiesTimeline'>
      <div className = 'aboutTitle'>
                TIMELINE
            </div>
            <div className = 'timelineContainer'>
                {timelineContent}
            </div>
        </div>
    )
}

export default Timeline
