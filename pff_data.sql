-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: pff
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pff`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pff` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `pff`;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `home_team_id` int(11) DEFAULT NULL,
  `away_team_id` int(11) DEFAULT NULL,
  `week` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_232B318C9C4C13F6` (`home_team_id`),
  KEY `IDX_232B318C45185D02` (`away_team_id`),
  CONSTRAINT `FK_232B318C45185D02` FOREIGN KEY (`away_team_id`) REFERENCES `team` (`id`),
  CONSTRAINT `FK_232B318C9C4C13F6` FOREIGN KEY (`home_team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,1,2,5),(2,2,17,6),(3,3,2,7),(4,4,2,8),(5,2,12,10),(6,5,2,11),(7,6,2,12),(8,2,15,13),(9,2,18,14),(10,7,2,15),(11,2,6,16),(12,8,2,17),(13,2,19,19),(14,2,3,20),(15,9,2,21),(16,9,13,1),(17,10,9,2),(18,11,9,3),(19,9,16,4),(20,7,9,5),(21,12,9,6),(22,9,20,7),(23,9,23,8),(24,13,9,9),(25,14,9,10),(26,9,21,12),(27,9,22,13),(28,15,9,14),(29,9,5,15),(30,16,9,16),(31,9,11,17),(32,9,12,19),(33,9,23,20),(34,9,2,21);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migration_versions`
--

DROP TABLE IF EXISTS `migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migration_versions`
--

LOCK TABLES `migration_versions` WRITE;
/*!40000 ALTER TABLE `migration_versions` DISABLE KEYS */;
INSERT INTO `migration_versions` VALUES ('20180103005951'),('20180103022325'),('20180103031017'),('20180108020809');
/*!40000 ALTER TABLE `migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `drafted_by_team_id` int(11) DEFAULT NULL,
  `first_name` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `draft_round` int(11) NOT NULL,
  `draft_season` int(11) NOT NULL,
  `draft_pick_number` int(11) NOT NULL,
  `birth_date` date NOT NULL,
  `draft_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_98197A655D046F57` (`drafted_by_team_id`),
  CONSTRAINT `FK_98197A655D046F57` FOREIGN KEY (`drafted_by_team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4318 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (698,2,'Tom','Brady',6,2000,199,'1977-08-03','AD'),(4317,9,'Matt','Ryan',1,2008,3,'1985-05-17','AD');
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_game_stats`
--

DROP TABLE IF EXISTS `player_game_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_game_stats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `touchdowns` int(11) NOT NULL,
  `interceptions` int(11) NOT NULL,
  `completions` int(11) NOT NULL,
  `attempts` int(11) NOT NULL,
  `yards` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3AD19A1899E6F5DF` (`player_id`),
  KEY `IDX_3AD19A18E48FD905` (`game_id`),
  CONSTRAINT `FK_3AD19A1899E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`),
  CONSTRAINT `FK_3AD19A18E48FD905` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_game_stats`
--

LOCK TABLES `player_game_stats` WRITE;
/*!40000 ALTER TABLE `player_game_stats` DISABLE KEYS */;
INSERT INTO `player_game_stats` VALUES (1,698,1,3,0,28,40,406),(2,698,2,3,0,29,35,376),(3,698,3,2,0,19,26,222),(4,698,4,4,0,22,33,315),(5,698,5,0,1,23,32,316),(6,698,6,4,0,24,40,280),(7,698,7,1,0,30,50,286),(8,698,8,1,0,33,46,269),(9,698,9,3,1,25,38,406),(10,698,10,0,0,16,32,188),(11,698,11,3,0,17,27,214),(12,698,12,3,0,25,33,276),(13,698,13,2,2,18,38,287),(14,698,14,3,0,32,42,384),(15,698,15,2,1,43,62,466),(16,4317,16,2,0,27,39,334),(17,4317,17,3,1,26,34,396),(18,4317,18,2,0,20,30,240),(19,4317,19,4,1,28,37,503),(20,4317,20,1,0,15,28,267),(21,4317,21,3,1,27,42,335),(22,4317,22,1,1,22,34,273),(23,4317,23,3,0,28,35,288),(24,4317,24,4,0,25,34,344),(25,4317,25,1,1,18,33,267),(26,4317,26,2,1,26,34,269),(27,4317,27,1,1,22,34,297),(28,4317,28,3,0,18,28,237),(29,4317,29,2,0,17,23,286),(30,4317,30,2,0,27,33,277),(31,4317,31,4,0,27,36,331),(32,4317,32,3,0,26,37,338),(33,4317,33,4,0,27,38,392),(34,4317,34,2,0,17,23,284);
/*!40000 ALTER TABLE `player_game_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'Cleveland Browns'),(2,'New England Patriots'),(3,'Pittsburgh Steelers'),(4,'Buffalo Bills'),(5,'San Francisco 49ers'),(6,'New York Jets'),(7,'Denver Broncos'),(8,'Miami Dolphins'),(9,'Atlanta Falcons'),(10,'Oakland Raiders'),(11,'New Orleans Saints'),(12,'Seattle Seahawks'),(13,'Tampa Bay Buccaneers'),(14,'Philadelphia Eagles'),(15,'Los Angeles Rams'),(16,'Carolina Panthers'),(17,'Cincinnati Bengals'),(18,'Baltimore Ravens'),(19,'Houston Texans'),(20,'Los Angeles Chargers'),(21,'Arizona Cardinals'),(22,'Kansas City Chiefs'),(23,'Green Bay Packers');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-08  1:38:00
