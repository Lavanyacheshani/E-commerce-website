import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-[100] w-full py-3 px-3  bg-my-background flex items-center justify-between drop-shadow-header-shadow ">
       
      <FooterIcon Icon={HomeOutlinedIcon} iconText="home" />
      <FooterIcon Icon={AppsOutlinedIcon} iconText="Category"/>
      <FooterIcon Icon={AccountCircleOutlinedIcon} iconText="Profile"/>
      
    </footer>
  )
}

export default Footer;

const FooterIcon = ({Icon , iconText})=>
<IconButton sx={{padding:'4px', paddingTop:'o' , borderRadius:'5px' , color:"white" }}>
<div className='text-white hover:text-orange-500 transition-all duration-300 '>
<Icon/>
<p className='text-xs font-semibold '>{iconText}</p>
</div>

  
</IconButton>
