import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1544015759-237f87d55ef3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					TEA
				</Text>
			</Box>
			<Text font="--headline1" text-align="center" color="#e1e10c">
				READ ABOUT TEA
			</Text>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				TEA RECEPIES
			</Text>
			<Components.Custstories />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60d3404cd3b536001e86f361"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});