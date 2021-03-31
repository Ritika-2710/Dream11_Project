-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2021 at 08:40 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flask`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `title` varchar(40) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `title`, `description`) VALUES
(1, 'Select A Match', 'Choose an upcoming match that you want to play'),
(2, 'Create Team', 'Use your skills to pick the right players'),
(3, 'Join Contests', 'Choose between different contests and win money');

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `team` varchar(50) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `team`, `price`, `description`) VALUES
(1, 'Sonu Shrivastav', 'PUNJAB vs RAJASTHAN', '25 LAakhs', 'I have been playing Dream11 since 2017, and one thing I can say for sure is practice matters if you want to win big. I take a lot of time to study teams and players, and this time my hard work helped me win Rs.25 Lakh.'),
(2, 'Samir Pinjari', 'CHENNAI vs MUMBAI', '20 Lakhs', 'Cricket is much more than a passion for me. Cricket is life. That\'s why I like playing on Dream11 so much. Thanks to its contests, I\'m not just using my knowledge of cricket every day but also earning from it.'),
(3, 'Indrajeet Pramanik', 'DELHI vs CHENNAI', '12.5 Lakhs', 'As a die-hard cricket fan, I practically kept track of all sorts of news on players, teams and tournaments. But when I got introduced to Dream11, I got an opportunity to put my knowledge to good use.');

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`id`, `question`, `answer`) VALUES
(1, 'What is Fantasy Cricket?', 'Think you can tell which players will perform well in a cricket match? Dream11 is the place for you! On Dream11, you can create your fantasy cricket team for a real-life match and compete with other players for big prizes. Remember, there are cash prizes for every match, so you create your fantasy teams and win real money every day.'),
(2, 'Can I actually win money on Dream11?', 'Absolutely! Lots of players have already won big prizes on Dream11 and you can too. We host different kinds of cash contests, each with its own entry fee and prize money.\n         Choose a contest that you want to play, defeat the competition, and celebrate big wins!'),
(3, 'Is it safe to add money to Dream11?', 'Adding money to your Dream11 account is both simple and safe. We have many different payment options enabled on Dream11 and work hard to ensure that your personal details are safe with us. What\'s more, after you verify your personal details, you can withdraw the money that you win on Dream11 directly to your bank account.');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`) VALUES
('hello world'),
('hello world 2'),
('hello world 3'),
('hello world 3'),
('hello world 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
