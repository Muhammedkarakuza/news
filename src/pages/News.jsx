import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { clearNewsData, getNewsData } from "../features/newsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
const News = () => {
  const dispatch = useDispatch();
  const { newsData, error, loading } = useSelector((state) => state.newsApi);
  useEffect(() => {
    dispatch(getNewsData());
    //? News componenti DOM'dan kaldırılınca (unmount) glabal state'teki verileri silecek dispatch yayınlanması
    return () => {
      dispatch(clearNewsData());
    };
  }, []);

  return (
    <>
      <h1>NEWS</h1>
      <Box display="flex" alignItems="center" justifyContent="center">
        {loading && <img src={loadingGif} />}
        {error && (
          <Typography align="center" color="error" variant="h3">
            Data can not be fetched
          </Typography>
        )}
      </Box>

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {newsData.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  borderRadius: 12,
                  width: 1,
                  backgroundColor: "#1976D2",
                  color: "white",
                }}
                size="small"
                href={item?.url}
                target="_blank"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
