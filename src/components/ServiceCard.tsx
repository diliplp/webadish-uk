import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={link} className={styles.link}>
                Learn more <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ServiceCard;
