import {useState} from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    MenuItem,
    Modal,
    styled,
    TextField,
    Typography
} from "@mui/material";
import '../App.scss';
import logo from "../img/logo.png";
import road from "../img/road.png";
import protector from "../img/protector.png";
import ico1 from "../img/ico-1.png";
import ico2 from "../img/ico-2.png";
import ico3 from "../img/ico-3.png";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MapIcon from "@mui/icons-material/Map";
import ColorButton from "../components/ColorButton";
import InlineButton from "../components/InlineButton";
import Form from "../components/Form";

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




function Home() {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    return (
        <div>

            <Container id="bgr">
                <img src={logo} alt="" id="logo"/>
                <img src={road} alt=""/>
                <Grid container alignItems='center' mb={2}>
                    <Grid item xs={8}>
                        <Typography variant='h2' component='h1'>Первый в истории <br/>DanoПробег</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={protector} alt=""/>
                    </Grid>
                </Grid>

                <Grid className='points ' container>
                    <Grid item xs={12} sm={4} mb={4}>
                        <img src={ico1}/>
                        <div>Презентация <br/>новинок Danogips</div>
                    </Grid>
                    <Grid item xs={12} sm={4} mb={4}>
                        <img src={ico2}/>
                        <div>Секреты мастерства <br/>от Instagram-блогеров</div>
                    </Grid>
                    <Grid item xs={12} sm={4} mb={4}>
                        <img src={ico3}/>
                        <div>Подарки <br/>и сюрпризы!</div>
                    </Grid>
                </Grid>
                <ColorButton variant="contained" size="large" onClick={handleOpen}>Зарегистрироваться</ColorButton>
                <Typography variant='h6' component='p'>Регистрируйтесь на DanoПробег!
                    DanoПробег – серия семинаров о продуктах Danogips, лайфхаках и новых стандартах в финишной отделке
                    помещений.
                    Спикеры – технические специалисты Danogips и известные строительные Instagram-блогеры.</Typography>
                <Grid container spacing={3} mb={2} mt={2}>
                    <Grid item xs={12} md={4}>
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
                                <Typography variant='h6'>Адрес: ул. Заставская, дом 31, корпус 2, литера В, помещение
                                    3-Н</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                                <Typography variant='h6'>Адрес: проезд Гоголя, д.6 (территория Рязанского
                                    Технологического колледжа)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                <Typography variant='h2'>Программа:</Typography>
                <List>
                    <ListItem>
                        <Typography variant="h6" component='p'>09:30-10:00 – Сбор гостей</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>10:00-10:20 – Вступление</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>10:20-11:30 – Обзор продуктов Danogips Grunt и Danogips
                            ProFinish Grey</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>11:30-12:10 – Нанесение валиком Danogips Jet9, выведение
                            углов</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>12:10-12:50 – Приклеивание стеклохолста на Danogips
                            SuperFinish</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>12:50-13:20 – Кофе-брейк</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>13:20-14:20 – Обзор продуктов Danogips Top и Danogips
                            Jet5</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>14:20-14:40 – Презентация новинки Danogips UltraFinish (в
                            макете выделить цветом, сделать акцент)</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>14:40-15:20 – Danogips ProSpray. Механизация строительных
                            процессов</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6" component='p'>15:20 – Розыгрыш призов</Typography>
                    </ListItem>
                </List>
                <Typography variant='h6' component='p' mb={4}>
                    Участие в DanoПробеге бесценно и бесплатно по обязательной <InlineButton
                    onClick={handleOpen}>регистрации</InlineButton>.
                </Typography>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Form />
            </Modal>
        </div>
    );
}

export default Home;