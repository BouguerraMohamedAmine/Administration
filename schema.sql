-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema RBK
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema RBK
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `RBK` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema rbk
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rbk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rbk` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `RBK` ;

-- -----------------------------------------------------
-- Table `RBK`.`COHORTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBK`.`COHORTS` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `C_name` VARCHAR(255) NOT NULL,
  `C_phase` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`ID`));


-- -----------------------------------------------------
-- Table `RBK`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBK`.`Students` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `S_name` VARCHAR(255) NULL,
  `S_age` INT(32) NOT NULL,
  `COHORTS_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `COHORTS_ID`),
  INDEX `fk_Students_COHORTS_idx` (`COHORTS_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Students_COHORTS`
    FOREIGN KEY (`COHORTS_ID`)
    REFERENCES `RBK`.`COHORTS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `RBK`.`HIR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBK`.`HIR` (
  `ID` INT(16) NOT NULL AUTO_INCREMENT,
  `HIR_Name` VARCHAR(255) NOT NULL,
  `HIR_Position` VARCHAR(32) NOT NULL,
  `COHORTS_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `COHORTS_ID`),
  INDEX `fk_HIR_COHORTS1_idx` (`COHORTS_ID` ASC) VISIBLE,
  CONSTRAINT `fk_HIR_COHORTS1`
    FOREIGN KEY (`COHORTS_ID`)
    REFERENCES `RBK`.`COHORTS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

USE `rbk` ;

-- -----------------------------------------------------
-- Table `rbk`.`administration`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rbk`.`administration` (
  `User` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `rbk`.`cohort`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rbk`.`cohort` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cname` VARCHAR(45) NOT NULL,
  `cphase` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `rbk`.`hirs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rbk`.`hirs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `HR_fname` VARCHAR(45) NOT NULL,
  `HR_position` VARCHAR(45) NOT NULL,
  `FB` VARCHAR(45) NOT NULL,
  `cohort_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cohort_id`),
  INDEX `fk_hirs_cohort1_idx` (`cohort_id` ASC) VISIBLE,
  CONSTRAINT `fk_hirs_cohort1`
    FOREIGN KEY (`cohort_id`)
    REFERENCES `rbk`.`cohort` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `rbk`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rbk`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `sage` VARCHAR(45) NOT NULL,
  `cohort_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cohort_id`),
  INDEX `fk_students_cohort_idx` (`cohort_id` ASC) VISIBLE,
  CONSTRAINT `fk_students_cohort`
    FOREIGN KEY (`cohort_id`)
    REFERENCES `rbk`.`cohort` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
