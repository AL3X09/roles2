-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2017 a las 05:53:46
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `roles`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_estadoUsuario` (IN `pkusuario` INT)  NO SQL
UPDATE usuario AS U SET U.flestado=0
WHERE U.idusuario=pkusuario$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idpermisos` int(11) NOT NULL,
  `cosecutivo` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`idpermisos`, `cosecutivo`, `nombre`) VALUES
(1, 1, 'ver'),
(2, 2, 'crear'),
(3, 3, 'editar'),
(4, 4, 'eliminar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `consecutivo` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idroles`, `consecutivo`, `nombre`) VALUES
(1, 1, 'Administrador'),
(2, 2, 'Eliminar'),
(3, 3, 'Andrea'),
(15, 15, 'Cliente'),
(17, 17, 'contratista'),
(18, 6, 'PRUEBA'),
(19, 7, 'FDF'),
(20, 8, 'Mensajero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_has_permisos`
--

CREATE TABLE `roles_has_permisos` (
  `fkroles` int(11) NOT NULL,
  `fkpermisos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles_has_permisos`
--

INSERT INTO `roles_has_permisos` (`fkroles`, `fkpermisos`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(15, 1),
(17, 1),
(18, 1),
(18, 3),
(19, 1),
(20, 1),
(20, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `consecutivo` int(11) NOT NULL,
  `nombre1` varchar(45) NOT NULL,
  `nombre2` varchar(45) DEFAULT NULL,
  `apellido1` varchar(45) NOT NULL,
  `apellido2` varchar(45) DEFAULT NULL,
  `identificacion` bigint(20) NOT NULL,
  `celular` int(11) DEFAULT NULL,
  `usuario` varchar(45) NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  `flestado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `consecutivo`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `identificacion`, `celular`, `usuario`, `contrasenia`, `flestado`) VALUES
(1, 2, 'Alex', '', 'Cifuentes', 'Sanchez', 96497432201, 2147483647, 'AL3X', '11223344', '1'),
(2, 1, 'EL', 'SA', 'SDA', 'SSDA', 2324, 32423, 'ELIMINE', '11223344', '0'),
(3, 2, 'Lina', 'Alejandra', 'Rodriguez', 'Garcia', 10327889987, 2147483647, 'lina', '1234', '0'),
(4, 3, 'Laura', 'Marcela', 'Prieto', 'Gomez', 1029876674, 2147483647, 'lau', '123456', '0'),
(5, 4, 'Laura', 'Marcela', 'Prieto', 'Gomez', 1029876674, 2147483647, 'lau', '123456', '0'),
(6, 5, 'Laura', 'Marcela', 'Prieto', 'Gomez', 1029876674, 2147483647, 'lau', '12345678', '0'),
(7, 6, 'Laura', 'Marcela', 'Prieto', 'Gomez', 1029876674, 2147483647, 'lau', '12345678', '0'),
(8, 7, 'name', '', 'j', '', 3737372838, 2147483647, 'leidy', '12345678', '1'),
(9, 8, 'Andres', 'Manuel', 'Garcia', 'Romero', 1024356789, 2147483647, 'andres', '12345678', '0'),
(10, 9, 'Camila', 'Andrea', 'Linares', 'Albarracin', 1024567765, 2147483647, 'cami', '12345678', '0'),
(11, 10, 'juliana', 'Andrea', 'estrada', 'galvis', 1032456765, 10326578, 'juli', '12345678', '1'),
(12, 11, 'Andres ', 'Felipe', 'Romero', 'Albarracin', 1123456, 2147483647, 'and', '12345678', '1'),
(13, 12, 'Tatiana', '', 'Andrade ', 'Danut', 1098789766, 310234543, 'tato', '12345678', '0'),
(14, 13, 'Camilo', 'Andres', 'Prieto', 'niño', 1023456654, 2147483647, 'cam', '12345678', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_has_roles`
--

CREATE TABLE `usuario_has_roles` (
  `fkusuario` int(11) NOT NULL,
  `fkroles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_has_roles`
--

INSERT INTO `usuario_has_roles` (`fkusuario`, `fkroles`) VALUES
(1, 1),
(2, 2),
(3, 15),
(4, 17),
(5, 17),
(6, 17),
(7, 17),
(8, 15),
(9, 20),
(10, 15),
(11, 19),
(12, 17),
(13, 18),
(14, 15);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idpermisos`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idroles`);

--
-- Indices de la tabla `roles_has_permisos`
--
ALTER TABLE `roles_has_permisos`
  ADD PRIMARY KEY (`fkroles`,`fkpermisos`),
  ADD KEY `fk_roles_has_permisos_permisos1_idx` (`fkpermisos`),
  ADD KEY `fk_roles_has_permisos_roles_idx` (`fkroles`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- Indices de la tabla `usuario_has_roles`
--
ALTER TABLE `usuario_has_roles`
  ADD PRIMARY KEY (`fkusuario`,`fkroles`),
  ADD KEY `fk_usuario_has_roles_roles1_idx` (`fkroles`),
  ADD KEY `fk_usuario_has_roles_usuario1_idx` (`fkusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idpermisos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idroles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `roles_has_permisos`
--
ALTER TABLE `roles_has_permisos`
  ADD CONSTRAINT `fk_roles_has_permisos_permisos1` FOREIGN KEY (`fkpermisos`) REFERENCES `permisos` (`idpermisos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_roles_has_permisos_roles` FOREIGN KEY (`fkroles`) REFERENCES `roles` (`idroles`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario_has_roles`
--
ALTER TABLE `usuario_has_roles`
  ADD CONSTRAINT `fk_usuario_has_roles_roles1` FOREIGN KEY (`fkroles`) REFERENCES `roles` (`idroles`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_has_roles_usuario1` FOREIGN KEY (`fkusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
