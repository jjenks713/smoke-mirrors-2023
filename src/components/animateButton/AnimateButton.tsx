import { motion } from "framer-motion"
import { Button } from "@mui/material";

type AnimateButtonProps = {
    children: any,
    variant?: string,
    color?: string,
    size?: string,
    style?: {},
    href?: string
}
const AnimateButton = (props: AnimateButtonProps) => {
    const { children, variant, color, size, style, href} = props

    return (
    <Button 
        component={motion.button} 
        whileTap={{ scale: 0.8 }}
    >
        {children}
    </Button>
    )
}

export default AnimateButton;