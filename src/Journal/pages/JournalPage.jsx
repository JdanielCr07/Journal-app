import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view"
import { NothingSelectedView } from "../view/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis temporibus eveniet alias quas, magni a consequatur obcaecati cupiditate cum illum iusto voluptate perspiciatis vitae asperiores nam reprehenderit tempore perferendis aperiam.</Typography> */}
      <NothingSelectedView />  
      {/* <NoteView />  */}


    </JournalLayout>
    
  )
}
