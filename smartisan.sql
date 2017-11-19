-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-11-19 12:13:04
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartisan`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE `cart` (
  `id` int(8) NOT NULL,
  `userid` int(8) NOT NULL,
  `productid` int(8) NOT NULL,
  `count` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `userid`, `productid`, `count`) VALUES
(1, 1, 1, 1),
(16, 0, 0, 1),
(17, 1, 0, 1),
(18, 1, 0, 1),
(19, 1, 0, 1),
(20, 1, 0, 1),
(21, 1, 0, 1),
(22, 0, 0, 1),
(23, 1, 0, 1),
(24, 1, 20, 1),
(25, 2, 20, 1),
(26, 1, 20, 1),
(27, 1, 20, 1),
(28, 2, 20, 1),
(29, 2, 20, 1),
(30, 1, 20, 1),
(44, 20, 10, 1),
(45, 20, 9, 1);

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(8) NOT NULL,
  `src` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `detail` varchar(256) NOT NULL,
  `price` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `src`, `name`, `detail`, `price`) VALUES
(1, '../img/rm1.png', 'Smartisan 卫衣 热血', '风格简洁、舒适服帖', 249),
(2, '../img/rm2.jpg', 'Smartisan S-1001 圈铁线控耳机', '极简造型、复合振膜、专业级调音', 199),
(3, '../img/rm3.jpg', '坚果 Pro 钢化玻璃保护膜（前屏用）', '高达 92% 的超强透光率、耐刮花、防指纹', 49),
(4, '../img/rm4.png', 'Smartisan M1/M1L 软胶保护套', 'TPU环保材质、细腻防滑、防油污', 19),
(5, '../img/gf2.jpg', '坚果 Pro 软胶保护套', 'TPU 环保材质、耐磨、耐油、耐久性强', 249),
(6, '../img/gf3.jpg', 'Smartisan 原装快充充电器 18W', '18W 安全快充、支持主流 QC3.0, MTK PE+2.0 快充协议', 249),
(7, '../img/gf4.jpg', 'Smartisan 双口 & 快充车载充电器', '铝合金机身、双口 & 快充、智能调节', 49),
(8, '../img/gf5.jpg', 'Smartisan 坚果自拍杆', '航空铝合金伸缩杆、防过敏硅胶手柄', 249),
(9, '../img/gf6.jpg', 'Smartisan 半入耳式线控耳机', '卓越的 14.2mm 发音单元、三按键式线控', 249),
(10, '../img/gf7.jpg', 'Smartisan 原装 Type-C 数据线', 'PTC 过温保护、凹形设计、TPE 环保材质', 249);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(8) UNSIGNED NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, '1', '1'),
(2, '2', 'c81e728d9d4c2f63'),
(3, '11', 'c4ca4238a0b92382'),
(4, '', 'd41d8cd98f00b204'),
(5, '111', 'd41d8cd98f00b204'),
(6, '1111', 'c4ca4238a0b92382'),
(7, '666', 'c4ca4238a0b92382'),
(8, '6666', 'd41d8cd98f00b204'),
(9, '66666', '1679091c5a880faf'),
(10, '666666', '1679091c5a880faf'),
(11, '11111', 'd41d8cd98f00b204'),
(12, '111111', 'c4ca4238a0b92382'),
(13, '123', '202cb962ac59075b'),
(14, '888', '0a113ef6b61820da'),
(15, '8888', '8888'),
(16, '999', 'b706835de79a2b4e'),
(17, '000', '000'),
(18, '123123', '202cb962ac59075b964b07152d234b70'),
(19, 'a', 'c4ca4238a0b923820dcc509a6f75849b'),
(20, '13866201199', 'c4ca4238a0b923820dcc509a6f75849b'),
(21, '18888888888', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
