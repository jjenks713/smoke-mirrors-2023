import React from 'react';
import MarketingTeam from '@/sections/team/marketing-team';
import { ITeamMemberProps } from '@/types/team';
import { Box } from '@mui/material';
import HeroBackground from '@/components/heroBackground';

export default function About() {
    const members = [
        {
            id: "0",
            name: "Marcelle Hopkins",
            role: "Owner/Stylist",
            photo: "/images/marcelle.jpg",
            socialLinks: {
                facebook: "facebook.com",
                instagram: "https://www.instagram.com/marcellehop/",
            },
        },
        {
            id: "0",
            name: "Marcelle Hopkins",
            role: "Owner/Stylist",
            photo: "/images/marcelle.jpg",
            socialLinks: {
                facebook: "facebook.com",
                instagram: "https://www.instagram.com/marcellehop/",
            },
        },
        {
            id: "0",
            name: "Marcelle Hopkins",
            role: "Owner/Stylist",
            photo: "/images/marcelle.jpg",
            socialLinks: {
                facebook: "facebook.com",
                instagram: "https://www.instagram.com/marcellehop/",
            },
        },
        {
            id: "0",
            name: "Marcelle Hopkins",
            role: "Owner/Stylist",
            photo: "/images/marcelle.jpg",
            socialLinks: {
                facebook: "facebook.com",
                instagram: "https://www.instagram.com/marcellehop/",
            },
        },
        {
            id: "0",
            name: "Marcelle Hopkins",
            role: "Owner/Stylist",
            photo: "/images/marcelle.jpg",
            socialLinks: {
                facebook: "facebook.com",
                instagram: "https://www.instagram.com/marcellehop/",
            },
        }
    ]
    return (
        <MarketingTeam members={members} />
    )
}