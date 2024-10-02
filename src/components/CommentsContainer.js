import { USER_LOGO } from "../utils/constants";

const CommentsContainer = () => {
    const commentsData = [
        {
        name:"Sooraj",
        text:"making a n nested comments like reddit using recursion",
        replies:[{
          name:"Sooraj",
          text:"making a n nested comments like reddit using recursion",
          replies:[{
            name:"Sooraj",
            text:"making a n nested comments like reddit using recursion",
            replies:[{
              name:"Sooraj",
              text:"making a n nested comments like reddit using recursion",
              replies:[{
                name:"Sooraj",
                text:"making a n nested comments like reddit using recursion",
                replies:[{
                  name:"Sooraj",
                  text:"making a n nested comments like reddit using recursion",
                  replies:[]
                  }]
                }]
              }]
            }]
          },
          {
            name:"Sooraj",
            text:"making a n nested comments like reddit using recursion",
            replies:[]
            },
            {
              name:"Sooraj",
              text:"making a n nested comments like reddit using recursion",
              replies:[{
                name:"Sooraj",
                text:"making a n nested comments like reddit using recursion",
                replies:[]
                },
                {
                  name:"Sooraj",
                  text:"making a n nested comments like reddit using recursion",
                  replies:[]
                  },]
              },]
        },
       {
        name:"Sooraj",
        text:"making a n nested comments like reddit using recursion",
        replies:[{
          name:"Sooraj",
          text:"making a n nested comments like reddit using recursion",
          replies:[{
            name:"Sooraj",
            text:"making a n nested comments like reddit using recursion",
            replies:[]
            },
            {
              name:"Sooraj",
              text:"making a n nested comments like reddit using recursion",
              replies:[]
              },]
          },
          {
            name:"Sooraj",
            text:"making a n nested comments like reddit using recursion",
            replies:[{
              name:"Sooraj",
              text:"making a n nested comments like reddit using recursion",
              replies:[]
              },]
            },]
       },
       {
        name:"Sooraj",
        text:"making a n nested comments like reddit using recursion",
        replies:[{
          name:"Sooraj",
          text:"making a n nested comments like reddit using recursion",
          replies:[{
            name:"Sooraj",
            text:"making a n nested comments like reddit using recursion",
            replies:[]
            },]
          },]
       },
       {
        name:"Sooraj",
        text:"making a n nested comments like reddit using recursion",
        replies:[{
          name:"Sooraj",
          text:"making a n nested comments like reddit using recursion",
          replies:[]
          },]
       }
    ];
    const Comment = ({comment})=>{
        const {name,text} = comment;
        return (
            <div className="flex m-2 p-2 shadow-sm ">
                <img className="w-8 h-8" alt="user-logo" src={USER_LOGO}/>
                <div className="ml-2">
                <h1 className="font-bold text-lg">{name}</h1>
                <p className="text-slate-500">{text}</p>
                </div>
            </div>
        )
    }
    const CommentList = ({commentsData})=>{
     
      return  commentsData?.map((comment)=>
          (
          <div className="pl-5 border border-l-black">
          <Comment comment={comment}/>
          <CommentList commentsData={comment.replies}/>
          </div>
          )
        )
      
    }
  return (
    <div className="ml-14 ">
        <h1 className="font-bold text-2xl my-2">Comments :</h1>
        <CommentList commentsData={commentsData}/>
    </div>
  )
}

export default CommentsContainer
