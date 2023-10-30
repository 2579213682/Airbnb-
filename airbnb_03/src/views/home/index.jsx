import React, { memo, useCallback, useEffect, useState } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
// import RoomItem from "@/components/room-item";
import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import SectionTabs from "@/components/section-tabs";
import { isEmpty0 } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
// import {  Rating } from "@mui/material";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
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
        {isEmpty0(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {isEmpty0(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmpty0(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmpty0(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmpty0(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmpty0(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
