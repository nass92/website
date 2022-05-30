import './ChatApp.css';
import { useState} from 'react';
import { Box, Button, Center, Container, Icon,Input, Link } from '@chakra-ui/react';
import bot from '../../asset/bot2.svg'
import quiz from './Quiz.json'
function ChatBot() {

  const handleInput = () => {
    const botMessage = document.querySelector('#message1')
    const humanMessage = document.querySelector('#message2');

  // to start the bot
    let welcome = ['Sup|sup|Hello|Hi|hello|hi|Yo|Halla|yello|yelow']
    let words2 = new RegExp(welcome);
    if(words2.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = ' bienvenue Prenom, chez Mugiwara vous trouverez des information vous apportant des connaissances relatif au crypto. etes vous pret à repondre à un  petit quizz de connaisance? repondre : lets go ou non tkt robot je gere';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      }, 2000);
    }
    let launch = ['Y|N|n|y']
    let words4 = new RegExp(launch);
    if(words4.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = ` explorer notre site afin de vous formez au mieux ${<a path='/'>launch App</a>}`;
        document.querySelector('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
    }




      //quiz Json List 
      for (var key in quiz) {
        console.log('ici', key)
          let owner1 =  quiz[key].answer;
          console.log(quiz[key].answer)
          let answers = quiz[key].question;
          let answers2 = quiz[key].question2;
          let answers3 = quiz[key].question3;
          let words91 = new RegExp(quiz[key].answer);
            if(words91.test(document.querySelector('#input').value)){
              botMessage.innerHTML = 'Typing...';
              setTimeout(() => {
                botMessage.innerHTML = answers;
                document.querySelector('#input').value = '';
              }, 2000);
              botMessage.innerHTML = 'Typing...';
              setTimeout(() => {
                botMessage.innerHTML = answers3;
                document.querySelector('#input').value = '';
              }, 8000);
              setTimeout(() => {
                botMessage.innerHTML = answers2;
                document.querySelector('#input').value = '';
              }, 13000);
              botMessage.innerHTML = 'Typing...';
             
            }
          

    }


// disconnect the bot 
    let bye = ['Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you']
    let words3 = new RegExp(bye);
    if(words3.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Bye, have a nice day';
        document.querySelector('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
    }
    humanMessage.innerHTML = document.querySelector('#input').value; // display the input
  }
 



  const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )
  return (

        

     <Container className='wrapper' maxW={['xs', 'sm', '3xl']} >
     <Container p='45px'  border='0.5px solid #F0F1F2' >
        <Container className="content">
        <div className="name">ChatBot</div>
          <div className="header">
            <div className="img"></div>
            <div className="right">
              <div className='status'></div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <Container className="messages">
              <div className="img">
              <img src={bot} alt="" />
            </div>  <Container className="bot-message" id='message1'></Container> 
               <Box> <Container className="human-message" id='message2'></Container> </Box>
              </Container>
            </div>
          </div>
          <Container className="bottom"  >
          <Center>
          <Box>
          
          <Input mb='15px' width={['2xs','2xs','sm', 'md', 'lg', 'lg']}  ml={['0px','10px','15px']} variant='filled'id='input' placeholder='Enter your message'/>
          </Box>
          </Center>
          <Box>
              <Center>
       <Button color='white' bg='#4299E1' mb='15px'width={['2xs','xs']} ml={["25px", "0px", "95px" ]}onClick={handleInput}>
            <i className="fas fa-paper-plane"></i>
            Send
          </Button>
          </Center>
          </Box>
               

          </Container>
        </Container>
        </Container>
        </Container>


  );
}

export default ChatBot;
