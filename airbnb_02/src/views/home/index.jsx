import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
// import RoomItem from "@/components/room-item";
import SectionRooms from "@/components/section-rooms";
// import {  Rating } from "@mui/material";

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
         <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">OutLined</Button> */}
      {/* <Rating value={5} readOnly sx={{ fontSize: "12px", color: "red" }} /> */}
    </HomeWrapper>
  );
});

export default Home;
