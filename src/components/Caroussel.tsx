import { useState, CSSProperties } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Feature {
  name: string;
  available: boolean;
}

interface PlanData {
  title: string;
  price: string;
  userCount: string;
  features: Feature[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      top="40%"
      right="0"
      zIndex="1"
      aria-label="Next"
    />
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      top="40%"
      left="0%"
      zIndex="1"
      aria-label="Previous"
    />
  );
};

const planData: PlanData[] = [
  {
    title: 'Plano Bronze',
    price: 'R$ 30',
    userCount: 'Uso de 5 colaboradores',
    features: [
      { name: 'Área de meus registros', available: true },
      { name: 'Dashboard', available: true },
      { name: 'Acesso de 5 colaboradores', available: true },
      { name: 'Suporte exclusivo', available: false },
      { name: 'Email corporativo', available: false },
    ],
  },
  {
    title: 'Plano Prata',
    price: 'R$ 50',
    userCount: 'Uso de 10 colaboradores',
    features: [
      { name: 'Área de meus registros', available: true },
      { name: 'Dashboard', available: true },
      { name: 'Acesso de 10 colaboradores', available: true },
      { name: 'Suporte exclusivo', available: false },
      { name: 'Email corporativo', available: false },
    ],
  },
  {
    title: 'Plano Ouro',
    price: 'R$ 100',
    userCount: 'Uso de 20 colaboradores',
    features: [
      { name: 'Área de meus registros', available: true },
      { name: 'Dashboard', available: true },
      { name: 'Acesso de 20 colaboradores', available: true },
      { name: 'Suporte exclusivo', available: true },
      { name: 'Email corporativo', available: false },
    ],
  },
  {
    title: 'Plano Platina',
    price: 'R$ 200',
    userCount: 'Acessos ilimitados',
    features: [
      { name: 'Área de meus registros', available: true },
      { name: 'Dashboard', available: true },
      { name: 'Acesso ilimitado', available: true },
      { name: 'Suporte exclusivo', available: true },
      { name: 'Email corporativo', available: true },
    ],
  },
];

const PlanSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
          centerMode: true,
          focusOnSelect: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  const getSlideStyle = (index: number): CSSProperties => {
    if (index === currentSlide) {
      return {
        transform: 'scale(1) translateZ(0)',
        transition: 'transform 0.5s, opacity 0.5s',
        zIndex: 2,
        opacity: 1,
      };
    } else if (index === currentSlide - 1 || index === currentSlide + 1) {
      return {
        transform: 'scale(0.8) translateZ(-100px)',
        transition: 'transform 0.5s, opacity 0.5s',
        zIndex: 1,
        opacity: 0.5,
      };
    } else {
      return {
        transform: 'scale(0.6) translateZ(-200px)',
        transition: 'transform 0.5s, opacity 0.5s',
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <Box
      maxW="100%"
      mx="auto"
      style={{ perspective: '1000px', overflow: 'hidden' }}
    >
      <Slider {...settings}>
        {planData.map((plan, index) => (
          <div key={index}>
            <Box style={getSlideStyle(index)}>
              <Card
                title={plan.title}
                price={plan.price}
                userCount={plan.userCount}
                features={plan.features}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default PlanSlider;
