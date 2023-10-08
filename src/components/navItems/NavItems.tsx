import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimateButton from "../animateButton";

type Props = {
    isMobile: boolean;
}
const NavItems = ( props: Props ) => {

    const navItems = [
        {
            label: 'About',
            link: '/about',
        },
        {
            label: 'Product',
            link: '/product'
        },
        {
            label: 'Book',
            link: 'https://smoke-mirrors-slc.square.site/'
        }
    ];

    return (
        <>
        {props.isMobile ?
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.label} disablePadding>
                        <AnimateButton>
                            <Link href={item.link}>
                                <ListItemText primary={item.label} />
                            </Link>
                        </AnimateButton>
                    </ListItem>
                ))}
            </List>
            :
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navItems.map((item, index) => (
                <Box  key={item.label}>
                    <AnimateButton>
                        <Link href={item.link}>
                            {item.label}
                        </Link>
                    </AnimateButton>
                    { index !== navItems.length - 1 && <Divider orientation='vertical' sx={{ height: "initial" }} /> }
                </Box>
                ))}
            </Box>
        }
        </>
        
    )
}

export default NavItems;