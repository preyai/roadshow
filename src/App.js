import logo from './logo.svg';
import top from './img/top.jpg';
import ico1 from './img/ico-1.png';
import ico2 from './img/ico-2.png';
import ico3 from './img/ico-3.png';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MapIcon from '@mui/icons-material/Map';
import './App.scss';
import {Box, Button, Container, Grid, Modal, styled, TextField, Typography, MenuItem} from "@mui/material";
import {useState} from "react";

const  regions = [
    {
        value: 'spb',
        label: 'Санкт-Петербург',
    },
    {
        value: 'rzn',
        label: 'Рязань',
    },
    {
        value: 'msk',
        label: 'Москва',
    },
]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function App() {

    const [region, setRegion] = useState('spb');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRegion = (event) => {
        setRegion(event.target.value);
    };

    const ColorButton = styled(Button)(({theme}) => ({
        color: theme.palette.getContrastText('#e52f23'),
        backgroundColor: '#e52f23',
        '&:hover': {
            backgroundColor: '#ee1123',
        },
        marginBottom: '2rem',
    }));

  return (
      <div>
          <img id="top" src={top}/>
          <Container>
              <h1>Первый в истории <br/>DanoПробег</h1>
              <Grid className='points ' container>
                  <Grid item xs={4}>
                      <img src={ico1}/>
                      <div>Презентация <br/>новинок Danogips</div>
                  </Grid>
                  <Grid item xs={4}>
                      <img src={ico2}/>
                      <div>Секреты мастерства <br/>от Instagram-блогеров</div>
                  </Grid>
                  <Grid item xs={4}>
                      <img src={ico3}/>
                      <div>Подарки <br/>и сюрпризы!</div>
                  </Grid>
              </Grid>
              <ColorButton variant="contained" size="large" onClick={handleOpen}>Зарегистрироваться</ColorButton>
              <Typography variant='h6' >Регистрируйтесь на DanoПробег!
                  DanoПробег – серия семинаров о продуктах Danogips, лайфхаках и новых стандартах в финишной отделке помещений.
                  Спикеры – технические специалисты Danogips и известные строительные Instagram-блогеры.</Typography>
              <Grid container spacing={3} mb={2}>
                  <Grid item xs={4}>
                      <Typography variant='h4' mb={2}>Санкт-Петербург</Typography>
                      <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={1}><EventIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>12 ноября</Typography>
                          </Grid>
                          <Grid item xs={1}><ScheduleIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Начало: 10:00</Typography>
                          </Grid>
                          <Grid item xs={1}><MapIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Адрес: ул. Заставская, дом 31, корпус 2, литера В, помещение 3-Н</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={4}>
                      <Typography variant='h4' mb={2}>Рязань</Typography>
                      <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={1}><EventIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>15 ноября</Typography>
                          </Grid>
                          <Grid item xs={1}><ScheduleIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Начало: 10:00</Typography>
                          </Grid>
                          <Grid item xs={1}><MapIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Адрес: проезд Гоголя, д.6 (территория Рязанского Технологического колледжа)</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={4}>
                      <Typography variant='h4' mb={2}>Москва</Typography>
                      <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={1}><EventIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>18 ноября</Typography>
                          </Grid>
                          <Grid item xs={1}><ScheduleIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Начало: 10:00</Typography>
                          </Grid>
                          <Grid item xs={1}><MapIcon/></Grid>
                          <Grid item xs={11}>
                              <Typography variant='h6'>Адрес: ул. Самокатная, д.4. стр. 7</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Регистрация на DanoПробег
                  </Typography>
                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                          <TextField label="Имя" variant="outlined" fullWidth />
                      </Grid>
                      <Grid item xs={6}>
                          <TextField label="Email" variant="outlined" fullWidth />
                      </Grid>
                      <Grid item xs={6}>
                          <TextField label="Телефон" variant="outlined" fullWidth />
                      </Grid>
                      <Grid item xs={6}>
                          <TextField
                              select
                              label="Регион"
                              value={region}
                              onChange={handleRegion}
                              fullWidth
                          >
                              {regions.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField

                              label="Комментарий" variant="outlined" multiline fullWidth
                              rows={4}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <ColorButton variant="contained" onClick={handleClose}>Зарегистрироваться</ColorButton>
                      </Grid>
                  </Grid>
              </Box>
          </Modal>
      </div>
  );
}

export default App;
