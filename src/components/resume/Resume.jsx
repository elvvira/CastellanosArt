import { useState } from 'react';
import { ContainerResume, Dropdown, ResumeTitleContainer } from './styles';

const Resume = () => {
	const [showHistorial, setShowHistorial] = useState(false);
	const [showCv, setShowCv] = useState(false);

	return (
		<ContainerResume>
			<div>
				<ResumeTitleContainer>
					<p>Historial Académico</p>
					<img
						onClick={() => setShowHistorial(!showHistorial)}
						src={showHistorial ? 'assets/icon-up.png' : 'assets/icon-down.png'}
						alt=''
					/>
				</ResumeTitleContainer>
				{showHistorial && (
					<Dropdown>
						· Doctor en Bellas Artes Facultad de Madrid <br /> · Profesor de
						Anatomía Artistica Facultad de BBAA Madrid <br /> · Profesor Dibujo
						I.E.S. Gabriel García Márquez. <br /> · Profesor de ratrato, cursos
						de verano de la Complutense <br /> · Scholarship at the ENDICOTT
						COLLEGE <br /> · Beverly, Massachusetts.
					</Dropdown>
				)}
			</div>
			<div>
				<ResumeTitleContainer>
					<p>Premios y Exposiciones</p>
					<img
						onClick={() => setShowCv(!showCv)}
						src={showCv ? 'assets/icon-up.png' : 'assets/icon-down.png'}
						alt=''
					/>
				</ResumeTitleContainer>
				{showCv && (
					<Dropdown>
						· Primer Premio en el Certamen Nacional de Dibujo “Antonio Rincón”
						<br /> · Diccionario de Pintores y Escultores del siglo XX <br /> ·
						V Feria de Arte de Santander <br /> · Retrato S.M. Rey Juan Carlos I{' '}
						<br /> · Retratos de Ministros, Eguiagaray, Lerma, Jesus Posada
						<br /> · Compra del C.O.I. para el museo de Lausane <br /> ·
						Exposición colectiva “Miradas Urbana”, Galería Castelló 120 (Madrid)
						<br /> · Primer Premio XXV Convocatoria Premio Penagos <br /> ·
						Painted Faces. Bernarducci Meisel Gallery. New York (U.S.A.) <br />{' '}
						· Contemporary Realism 2008 M.A.Doran Gallery. Tulsa (Oklahoma){' '}
						<br /> · Persterer Gallery Contemporary Fine Art (Zürich) <br /> ·
						19th International Contemporary Art Fair. Kunst 13 <br /> · Fine Art
						Zürich 2014
						<br /> · Museo MEAM ( Barcelona) <br /> · Contemporary Realist
						Painting GOSS183. Septiembre 2015 <br /> · Complete Guide To
						Painting in Acrylics A QUARTO BOOK 2015 <br />
						· Ganador Premio de Pintura BBVA 2017
						<br /> · NUEVA REALIDAD· Alicante - Elche - Murcia. FUNDACIÓN Caja
						Mediterraneo <br /> · PA - Idiosyncratic Monochromes, curated by
						Lorena Kloosterboer <br /> · The Encyclopedia of ACRYLIC Techniques
						by Hazel Harrison 2018 <br /> · " HIPERREALISME" . MUSEO del TABAC
						(Andorra); Juny a Setembre <br /> · 50 Years of Realism - at Centro
						Cultural Banco do Brasil in Sao Paulo <br /> ·
						現代スペイン語のリアリズム " Realismo Español Contemporáneo" HOKI
						MUSEUM ( JAPON) <br /> · Museo de Ciencias Naturales ( MADRID) "
						Arte y Ciencia Siglo XXI " <br /> · Sala Vimcorsa ( Diputación
						Córdoba) " El renacer de la figuración "
						<br /> · Palacio Einaudi - Chivasso (Turín) "GrandesPintores del
						realismo internacional en 20 x20 "
					</Dropdown>
				)}
			</div>
		</ContainerResume>
	);
};
export default Resume;
