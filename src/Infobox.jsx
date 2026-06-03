import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
export default function Infobox({info,error}) {
     const initial_url="https://images.unsplash.com/photo-1657829951302-d793848f4121?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const warm_url="https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const cold_url="https://images.unsplash.com/photo-1665129198099-e68c534a0ad1?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const rain_url="https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     return (
        info && !error && (
            <div className="info-box">
                <br /><br />
                <div className="card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.humidity>80?rain_url:(info.temp>15)?warm_url:cold_url}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <div>Temperature = {info.temp}&deg;C</div>
                                <div>Humidity = {info.humidity}&deg;C</div>
                                <div>Minimum Temperatur = {info.temp_min}&deg;C</div>
                                <div>Feels Like = {info.feels_like}&deg;C</div>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    )
}