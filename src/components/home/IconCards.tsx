import * as React from "react";
import styled from "styled-components";
import IconEvent from "../icons/IconEvent";
import IconRegistration from "../icons/IconRegistration";
import IconBranded from "../icons/IconBranded";
import IconOrganiser from "../icons/IconOrganiser";
import IconAttendee from "../icons/IconAttendee";
import IconCalendar from "../icons/IconCalendar";
import IconCard from "../shared/IconCard";

interface ICard {
	variant: "blue" | "green";
	title: string;
	description: string;
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	margin: 6rem 0;
	@media (min-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const IconCards = () => {
	const cards: ICard[] = [
		{
			variant: "green",
			title: "Event Metrics",
			description:
				"Track your ticket sales, attendees count and more with much ease.",
		},
		{
			variant: "blue",
			title: "Registration & Ticketing",
			description:
				"Manage your Event registrations and ticket sales easier and receive payments instantly.",
		},
		{
			variant: "green",
			title: "Branded Badges",
			description:
				"Create your custom branded badges for your events and get them printed.",
		},
		{
			variant: "blue",
			title: "Organiser App",
			description:
				"Manage your events at the palm of your hand with our Oragniser App.",
		},
		{
			variant: "green",
			title: "Attendee Engagement",
			description:
				"Engage with your attendees via email, surveys and much more.",
		},
		{
			variant: "blue",
			title: "Add to Calendar",
			description:
				"Effortless way to add your events to registered users calendars by 1-click.",
		},
	];
	return (
		<Grid>
			{cards.map((card, index) => (
				<IconCard
					key={card.title}
					variant={card.variant}
					title={card.title}
					description={card.description}
				>
					{index === 0 && <IconEvent />}
					{index === 1 && <IconRegistration />}
					{index === 2 && <IconBranded />}
					{index === 3 && <IconOrganiser />}
					{index === 4 && <IconAttendee />}
					{index === 5 && <IconCalendar />}
				</IconCard>
			))}
		</Grid>
	);
};

export default IconCards;
