import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, G } from "react-native-svg"
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import tw from 'twrnc';


const BodyPartsComponent: React.FC = () => {
    const [selectedPart, setSelectedPart] = useState<string | null>(null);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
    const handleBodyPartPress = ( bodyPartName: any) => {
        setSelectedPart(bodyPartName);
        setTimeout(() => {
        setSelectedPart(null);
            }, 300);
        navigation.navigate('BodyPartInfo', {bodyPartName})
    };

  return (
    <View style={{aspectRatio:1}}>
        <Svg
            width="100%"
            height="100%"
            viewBox='0 0 205 510'
            >
            <Path onPress={() => handleBodyPartPress('Head')}
                d="m 189.46211,75.215986 c 3.26084,-0.976974 8.42212,-5.442734 9.62914,-8.331554 0.49982,-1.196218 0.91334,-3.459577 0.91896,-5.029687 0.0127,-3.559432 0.64698,-4.597658 2.66843,-4.367994 1.24947,0.141957 1.91309,-0.40882 3.14547,-2.610621 0.85905,-1.534795 1.73201,-4.234795 1.93991,-6 0.36655,-3.112259 0.31528,-3.232949 -1.69301,-3.984888 L 204,44.115818 203.9853,38.557909 c -0.0227,-8.637803 -2.55411,-12.755685 -10.95785,-17.825544 -7.05441,-4.255825 -13.10701,-3.271555 -20.63611,3.35583 -4.48163,3.944883 -5.89421,7.088023 -6.25221,13.911804 -0.31355,5.976567 -0.84777,7.333334 -2.88745,7.333334 -1.55962,0 -1.63042,1.856668 -0.24326,6.378999 1.32169,4.308871 2.54214,5.804345 4.80418,5.886773 1.79075,0.06525 1.86917,0.220628 2.29742,4.551811 0.49259,4.98179 1.73258,7.22305 5.76168,10.414163 4.03858,3.198613 8.71666,4.111107 13.59038,2.650907 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Head' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <G>
                <Path onPress={() => handleBodyPartPress('Neck')}
                    d="M 213.51756,95.609605 C 215.4329,95.099692 217.9,94.672219 219,94.659659 c 1.72823,-0.01973 1.28853,-0.4058 -3.23595,-2.841247 -2.87978,-1.550127 -7.14678,-4.393413 -9.48223,-6.318413 -4.84493,-3.993453 -5.85664,-4.32038 -5.15766,-1.666667 0.26559,1.008334 0.49631,4.300593 0.5127,7.316133 0.0233,4.281114 0.24898,5.5469 1.02981,5.775254 1.42738,0.417446 6.77963,-0.23124 10.85089,-1.315114 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Neck' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Neck')}
                    d="m 196.5,96.273799 c 1.19167,-0.18382 2.19459,-0.695627 2.22871,-1.13734 0.0341,-0.44172 0.10912,-5.641627 0.16666,-11.555353 L 199,72.828886 l -1.99499,1.67854 c -1.09725,0.9232 -3.34725,2.250306 -5,2.949126 -1.65276,0.69882 -3.38001,1.76432 -3.83834,2.367767 -0.87517,1.152267 -1.1788,13.1514 -0.4058,16.0371 0.43189,1.612306 0.83647,1.6314 8.73913,0.41238 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Neck' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Neck')}
                    d="m 182.91314,95.833332 c 0.53431,-1.993787 0.5338,-14.094886 -6.5e-4,-15.487666 -0.23147,-0.603194 -2.31753,-1.992847 -4.63568,-3.08812 -2.31816,-1.09528 -5.03277,-2.951294 -6.03247,-4.12448 -0.9997,-1.173187 -1.54665,-1.533067 -1.21545,-0.799734 0.33121,0.733334 0.62949,6.20262 0.66284,12.153967 0.0333,5.951353 0.25477,11.01476 0.49203,11.25202 0.36633,0.366333 5.5359,1.20938 9.23849,1.5066 0.6097,0.04893 1.26581,-0.5727 1.49089,-1.412587 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Neck' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Neck')}
                    d="m 167.68665,96.951499 c 1.19164,-0.32018 1.35093,-0.896534 1.33334,-4.824227 -0.011,-2.453333 0.20856,-5.735606 0.48789,-7.29394 0.32991,-1.84048 0.26527,-2.833333 -0.18445,-2.833333 -0.38077,0 -2.61243,1.5838 -4.95923,3.519547 -2.3468,1.935753 -6.5264,4.710753 -9.28799,6.166666 l -5.02109,2.64712 2.80577,0.46394 c 1.54318,0.25516 4.75578,0.906313 7.13911,1.447 4.97713,1.129113 5.82587,1.207207 7.68665,0.707227 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Neck' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <G>
                <Path onPress={() => handleBodyPartPress('Right Shoulder')}
                    d="m 135.11862,125.26002 c 2.82541,-1.7462 5.45361,-4.915 5.92582,-7.14473 1.39392,-6.58194 7.98804,-14.76208 13.84045,-17.16934 1.71056,-0.70361 3.11124,-1.466785 3.11261,-1.695951 0.003,-0.549314 -3.18685,-1.165347 -8.6772,-1.67562 -11.39789,-1.059327 -19.96659,6.905531 -22.9458,21.328791 -1.35701,6.56973 -1.33215,8.27026 0.1255,8.58153 1.81651,0.3879 6.23805,-0.7534 8.61862,-2.22468 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Right Shoulder' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Right Shoulder')}
                    d="m 139.62969,171.16666 c 1.62021,-7.55322 2.40104,-12.90232 2.45735,-16.83434 0.0896,-6.25816 -0.76419,-27.76024 -1.14887,-28.93219 -0.23924,-0.72888 -0.63133,-0.62785 -1.79086,0.46148 -2.63922,2.47942 -9.01106,4.99889 -11.7226,4.63519 l -2.44382,-0.32778 0.25154,2.63772 c 0.33174,3.47865 -1.01765,14.26121 -2.56883,20.52659 -1.85345,7.48633 -1.92621,10.62443 -0.26811,11.56494 0.74505,0.42262 2.50246,1.66073 3.90536,2.75136 2.23449,1.73714 9.87403,4.85578 12.18645,4.97479 0.45135,0.0233 0.96542,-0.63276 1.14239,-1.45776 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Right Shoulder' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <G>
                <Path onPress={() => handleBodyPartPress('Left Shoulder')}
                    d="m 245.01398,123.40525 c -1.11453,-9.2737 -3.76533,-15.52545 -8.67946,-20.47007 -4.39647,-4.423748 -8.66059,-5.948888 -14.98815,-5.360801 -5.49036,0.510273 -8.6805,1.126306 -8.6772,1.67562 0.001,0.229166 1.3809,0.983601 3.06562,1.676511 5.53818,2.27782 13.59194,11.88121 13.60104,16.218 0.007,3.47535 5.45182,8.5845 10.51911,9.87114 5.02886,1.27688 5.69073,0.81369 5.15904,-3.6104 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Left Shoulder' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Left Shoulder')}
                    d="m 244.41865,167.60934 c 1.37384,-1.06848 3.10748,-2.28845 3.85253,-2.71107 1.66349,-0.94357 1.58499,-4.11575 -0.28617,-11.56494 -1.70942,-6.80525 -2.87697,-16.96534 -2.40737,-20.94895 0.29607,-2.51159 0.20324,-3.0986 -0.39536,-2.5 -0.43025,0.43026 -1.69728,0.77935 -2.81561,0.77577 -2.3873,-0.008 -8.72531,-2.81417 -10.84927,-4.80414 -1.15915,-1.08603 -1.54943,-1.18549 -1.78891,-0.45588 -0.37712,1.14894 -1.23772,22.58366 -1.15632,28.80015 0.0327,2.4935 0.66726,7.68372 1.41026,11.53385 0.743,3.85012 1.3509,7.09183 1.3509,7.2038 0,0.74872 11.06454,-3.75697 13.08532,-5.32859 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Left Shoulder' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <Path onPress={() => handleBodyPartPress('Left Forearm')}
                d="m 257.18808,224.3116 c 4.04942,-1.66925 4.19932,-2.23901 2.40304,-9.13384 C 258.71601,211.81871 258,207.48988 258,205.55812 c 0,-6.76921 -3.17134,-26.00418 -4.80026,-29.11476 -0.58189,-1.11118 -0.79093,-1.01957 -2.28045,0.99937 -2.08679,2.82848 -4.83878,4.47426 -12.65129,7.56589 -4.86693,1.92598 -6.268,2.76576 -6.268,3.75693 0,3.12921 3.14711,10.55622 13.19624,31.14238 1.33699,2.73891 5.12336,5.4254 7.64659,5.4254 1.02666,0 2.98202,-0.45977 4.34525,-1.02173 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Forearm' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Forearm')}
                d="m 122.03342,223.74126 c 1.28861,-0.87563 2.83527,-2.60063 3.43701,-3.83333 10.04912,-20.58616 13.19624,-28.01317 13.19624,-31.14238 0,-0.99117 -1.40107,-1.83095 -6.268,-3.75693 -7.81251,-3.09163 -10.5645,-4.73741 -12.65129,-7.56589 -1.48953,-2.01894 -1.69857,-2.11055 -2.28045,-0.99937 -1.62892,3.11058 -4.80026,22.34555 -4.80026,29.11476 0,1.93176 -0.6996,6.19763 -1.55468,9.47973 -0.85506,3.28209 -1.41993,6.37165 -1.25526,6.86568 0.41111,1.23331 5.36735,3.39729 7.82185,3.41516 1.10655,0.008 3.06623,-0.70179 4.35484,-1.57743 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Forearm' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <G>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 208.33333,144.33556 c 6.35914,-1.06721 12.86686,-6.5555 16.66746,-14.0565 1.65734,-3.27099 1.99844,-4.74375 1.9947,-8.61239 -0.004,-3.90726 -0.32251,-5.24204 -1.95871,-8.20237 -3.73532,-6.75821 -9.79901,-10.65395 -19.45982,-12.50237 -6.86593,-1.313665 -10.41343,-0.76834 -13.52076,2.07841 l -2.38953,2.18915 -0.3945,9.55192 c -0.27027,6.54388 -0.75588,10.53007 -1.54202,12.65798 -1.47054,3.98041 -0.70251,7.18462 2.66516,11.11899 3.41026,3.98412 10.46959,7.15946 14.27136,6.41938 0.55,-0.10707 2.2,-0.39606 3.66666,-0.6422 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 174.19179,143.15452 c 3.8741,-1.62685 8.20049,-6.32639 9.18295,-9.97497 0.57302,-2.12801 0.48882,-3.23087 -0.43822,-5.74016 -0.78615,-2.12791 -1.27175,-6.1141 -1.54202,-12.65798 L 181,105.22949 l -2.38953,-2.18915 c -3.10734,-2.84675 -6.65483,-3.392075 -13.52076,-2.07841 -9.66082,1.84842 -15.7245,5.74416 -19.45982,12.50237 -1.6362,2.96033 -1.95495,4.29511 -1.95872,8.20237 -0.004,3.85757 0.33844,5.34349 1.97352,8.57051 3.93783,7.77174 9.83268,12.67907 17.00348,14.15501 4.34702,0.89473 7.19198,0.58971 11.54362,-1.23767 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 202.43225,158.55149 c -0.50632,-7.13325 -0.7065,-7.44126 -7.31014,-11.24855 -6.93264,-3.99696 -7.32733,-3.91934 -8.03686,1.58043 -0.76923,5.96252 -0.1371,7.23313 4.8512,9.75121 2.19171,1.10638 5.41136,2.9162 7.15476,4.02184 1.74341,1.10563 3.30602,2.01024 3.47247,2.01024 0.16645,0 0.10731,-2.75182 -0.13143,-6.11517 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 178.19017,158.97006 c 5.56948,-2.8858 6.17426,-4.0173 5.39125,-10.08669 -0.70953,-5.49977 -1.10422,-5.57739 -8.03686,-1.58043 -6.621,3.81729 -6.80272,4.09984 -7.31953,11.38074 l -0.44345,6.24736 2.94254,-1.80858 c 1.6184,-0.99472 4.97813,-2.8633 7.46605,-4.1524 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 202.29213,173.8443 c -0.0723,-5.53823 -4.9534,-9.70114 -13.48276,-11.49902 l -2.19063,-0.46175 0.19063,6.89157 0.19063,6.89156 5.89331,0.44887 c 3.24132,0.24688 6.07898,0.63453 6.3059,0.86146 0.22692,0.22692 1.02494,0.32493 1.77336,0.21779 1.15786,-0.16574 1.35462,-0.66534 1.31956,-3.35048 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 178.66667,176.0632 5,-0.39654 0.15178,-6.88303 0.15178,-6.88303 -2.15178,0.45322 c -7.64778,1.61082 -12.79322,5.58672 -13.59081,10.50166 -0.62283,3.8381 0.005,4.71516 2.94607,4.11392 1.37112,-0.28032 4.74296,-0.68811 7.49296,-0.9062 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 215.09039,177.02846 c 0.76288,-0.53434 1.71637,-2.25934 2.11887,-3.83333 3.98465,-15.58217 6.26141,-26.03097 6.54641,-30.04369 l 0.3422,-4.81811 -1.54894,1.67408 c -2.7439,2.96559 -6.11091,5.16981 -10.68146,6.99264 -2.45623,0.97959 -4.84941,2.24321 -5.31819,2.80805 -0.61919,0.74609 -0.87943,4.5633 -0.95145,13.95592 -0.0866,11.30072 0.0374,13.00868 0.98486,13.56218 1.66718,0.97395 6.95638,0.78884 8.5077,-0.29774 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 163.96468,177.35223 c 1.11227,-0.59526 1.20059,-1.69785 1.08979,-13.60403 -0.086,-9.2397 -0.35992,-13.24466 -0.95498,-13.96166 -0.45894,-0.55298 -2.84406,-1.8069 -5.30029,-2.78649 -4.57055,-1.82283 -7.93757,-4.02705 -10.68147,-6.99264 l -1.54893,-1.67408 0.3422,4.81811 c 0.285,4.01272 2.56175,14.46152 6.54641,30.04369 0.4025,1.57399 1.35599,3.29899 2.11887,3.83333 1.57501,1.10318 6.57171,1.29604 8.3884,0.32377 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 182.28887,193.0412 c 0.83151,-0.52349 1.31584,-1.62106 1.36488,-3.09298 0.34363,-10.31618 0.2815,-9.94822 1.67958,-9.94822 1.39808,0 1.33596,-0.36796 1.67959,9.9482 0.0991,2.97637 1.52118,3.82137 7.12219,4.23214 C 200.12515,194.61966 201,193.72097 201,187.1284 v -4.7335 l -2.66667,-0.58591 c -1.46666,-0.32225 -4.46666,-1.04121 -6.66666,-1.59769 -5.03188,-1.27278 -7.63479,-1.27278 -12.66667,0 -2.2,0.55648 -5.2,1.27544 -6.66667,1.59769 l -2.66666,0.58591 v 4.7335 c 0,6.59257 0.87484,7.49126 6.86489,7.05194 2.45764,-0.18024 5.04843,-0.69286 5.75731,-1.13916 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 210.99251,214.92253 c 2.73496,-4.07593 5.27662,-8.21028 5.64814,-9.18743 0.47684,-1.25418 0.38393,-4.26888 -0.31592,-10.25178 -0.54527,-4.66133 -0.9914,-9.71526 -0.9914,-11.23094 0,-3.7529 -1.089,-4.51984 -5.61496,-3.95436 -1.99378,0.24911 -3.91265,0.80896 -4.26415,1.24412 -0.3515,0.43516 -0.79285,2.89119 -0.98078,5.45786 -0.18793,2.56666 -0.84015,7.21666 -1.44937,10.33333 -1.22828,6.28362 -1.76695,26.36385 -0.74962,27.94407 0.75817,1.17767 1.84938,-0.11842 8.71806,-10.35487 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 168.86683,213.79726 c -0.0833,-6.75654 -0.54459,-12.91794 -1.23254,-16.46393 -0.60466,-3.11667 -1.25314,-7.76667 -1.44106,-10.33333 -0.18793,-2.56667 -0.62928,-5.0227 -0.98078,-5.45786 -0.3515,-0.43516 -2.27037,-0.99501 -4.26415,-1.24412 -4.52596,-0.56548 -5.61497,0.20146 -5.61497,3.95436 0,1.51568 -0.45446,6.64083 -1.0099,11.38922 l -1.00991,8.63343 1.71887,3.36249 c 0.94538,1.84936 4.13078,6.76654 7.07866,10.92705 4.03604,5.69629 5.54864,7.37507 6.12438,6.79727 0.52354,-0.52542 0.72259,-4.17102 0.6314,-11.56458 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Torso')}
                    d="m 185.33333,238.00002 c 0.67956,0 1.34292,0.525 1.47411,1.16666 0.19088,0.93355 0.4884,0.76704 1.48898,-0.83333 0.68775,-1.1 1.92899,-3.05 2.75833,-4.33333 2.99272,-4.63096 7.68592,-21.92446 8.61375,-31.73983 l 0.44804,-4.73983 -6.22493,-0.69836 c -3.42372,-0.3841 -7.27494,-0.69837 -8.55828,-0.69837 -1.28333,0 -5.13455,0.31427 -8.55827,0.69837 l -6.22493,0.69836 0.44804,4.73983 c 0.92782,9.81537 5.62103,27.10887 8.61374,31.73983 0.82934,1.28333 2.07059,3.23333 2.75834,4.33333 1.00058,1.60037 1.2981,1.76688 1.48898,0.83333 C 183.99042,238.525 184.65377,238 185.33333,238 Z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Torso' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <Path onPress={() => handleBodyPartPress('Left Wrist')}
                d="m 261.33333,238.79834 c 2.38334,-0.60274 4.44921,-1.16982 4.59083,-1.26016 0.14161,-0.0903 -0.35746,-1.59838 -1.10907,-3.35121 -0.7516,-1.75283 -1.58188,-4.38695 -1.84505,-5.85362 -0.67633,-3.76925 -0.8177,-3.86607 -3.18351,-2.18018 -2.25765,1.60882 -6.44502,1.98945 -10.01582,0.91045 l -1.89595,-0.57292 0.99809,1.93011 c 0.54896,1.06156 1.22128,3.41837 1.49406,5.23737 0.57802,3.85456 3.52794,7.45418 5.48091,6.68805 0.6337,-0.24859 3.10218,-0.94515 5.48551,-1.54789 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Wrist' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Wrist')}
                d="m 117.95319,238.81604 c 1.2811,-1.2811 2.00324,-2.86841 2.34657,-5.15788 0.27277,-1.819 0.9451,-4.17581 1.49405,-5.23737 l 0.9981,-1.93011 -1.89596,0.57292 c -3.60476,1.08926 -7.75711,0.69912 -10.06537,-0.94574 -2.39211,-1.7046 -2.22601,-1.87116 -3.47289,3.48284 -0.41852,1.79706 -1.1952,4.10716 -1.72598,5.13356 -1.32668,2.56552 -1.21449,3.25896 0.53496,3.30646 0.825,0.0224 3.15,0.59163 5.16666,1.26494 4.81667,1.60818 4.49853,1.63171 6.61986,-0.48962 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Wrist' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Left Hand')}
                d="m 266.68604,272.16647 c -1.35929,-8.67173 -1.30463,-10.49981 0.31396,-10.49981 0.73333,0 1.58163,0.6 1.88511,1.33334 0.30348,0.73333 1.81333,4.48112 3.35522,8.32842 1.85562,4.63008 3.1905,7.06962 3.94823,7.21554 1.81159,0.34888 1.40704,-1.34011 -2.22545,-9.29137 -3.5167,-7.69783 -3.83592,-9.58593 -1.62064,-9.58593 1.00427,0 2.21006,1.69118 4.99086,7 2.17284,4.14815 4.07408,7 4.66667,7 1.46322,0 0.90111,-2.07718 -1.7452,-6.44909 -2.54525,-4.20496 -4.87996,-10.57557 -4.90507,-13.38424 -0.0235,-2.62993 2.18172,-2.41179 5.44776,0.53889 2.03179,1.83559 3.09411,2.32572 4.69613,2.16666 2.87796,-0.28573 2.97108,-1.43633 0.19742,-2.4393 -2.46595,-0.8917 -7.75977,-4.90388 -13.48447,-10.21986 -2.09599,-1.94635 -4.07766,-3.21306 -5.0266,-3.21306 -2.27864,0 -9.28126,1.916 -10.91922,2.98764 -1.36823,0.89515 -1.38063,1.05058 -0.46258,5.79942 0.51882,2.68378 1.15148,9.07961 1.40591,14.21294 0.50741,10.23778 1.79592,12.73973 1.79592,3.48722 0,-5.19784 0.0798,-5.49855 1.51389,-5.70207 2.05107,-0.29109 3.1274,2.47602 4.04393,10.39648 0.78838,6.81301 1.18982,8.00407 2.31762,6.87627 0.52215,-0.52215 0.46917,-2.3567 -0.1894,-6.55809 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Hand' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Hand')}
                d="m 106.33243,271.12182 c 1.07056,-8.15603 1.79448,-9.95909 3.87934,-9.66228 1.35692,0.19318 1.4549,0.5663 1.4549,5.54046 0,2.93333 0.3,5.48333 0.66666,5.66666 0.41816,0.20908 0.84198,-3.16252 1.13699,-9.04504 0.25867,-5.15811 0.90189,-11.45811 1.42935,-14 0.65516,-3.15724 0.74488,-4.885 0.28314,-5.45284 -0.86749,-1.06684 -8.72028,-3.50212 -11.29294,-3.50212 -1.43073,0 -2.91645,0.87918 -5.429777,3.21306 -5.7247,5.31598 -11.01852,9.32816 -13.484466,10.21986 -2.77366,1.00297 -2.68054,2.15357 0.19742,2.4393 1.60202,0.15906 2.66434,-0.33107 4.696126,-2.16666 3.266047,-2.95068 5.47128,-3.16882 5.447767,-0.53889 -0.02533,2.8373 -2.370193,9.19786 -4.96626,13.47145 -2.364127,3.89176 -3.09308,7.03714 -1.517347,6.54724 0.458334,-0.1425 2.483334,-3.3925 4.5,-7.22222 2.776167,-5.27204 3.988267,-6.96314 4.990867,-6.96314 2.24186,0 1.90363,2.03631 -1.609573,9.69062 -3.60882,7.86261 -3.975214,9.30938 -2.3576,9.30938 1.077626,0 2.538226,-2.9276 5.647083,-11.31886 1.94048,-5.23768 3.3716,-6.90542 4.74614,-5.53089 0.60482,0.60482 0.50649,2.46818 -0.42484,8.05127 -1.18271,7.08996 -1.03452,10.44092 0.39837,9.00804 0.37404,-0.37404 1.09793,-3.86352 1.60865,-7.7544 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Hand' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <G>
                <Path onPress={() => handleBodyPartPress('Left Leg')}
                    d="m 211.17403,335.89616 c 5.47796,-1.69098 8.13426,-10.12222 10.57413,-33.56283 0.81781,-7.85701 1.07651,-15.9345 0.98212,-30.6656 -0.11763,-18.35865 -0.56277,-23.28395 -1.81048,-20.03246 -0.47094,1.22725 -9.83782,7.69005 -11.17201,7.70827 -0.41128,0.005 -1.17144,0.27839 -1.68924,0.60616 -0.79581,0.50376 -0.77002,0.7674 0.16666,1.70408 1.65651,1.65651 1.36059,4.76558 -1.24435,13.07394 -2.88693,9.20774 -11.27301,38.21218 -13.28263,45.93982 -0.81062,3.11716 -1.7821,6.26716 -2.15882,7 -2.22314,4.32476 -1.19357,7.79384 2.65713,8.9531 2.47353,0.74466 13.78139,0.26212 16.97749,-0.72448 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Left Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Left Leg')}
                    d="m 211.83333,363.57245 c 1.1058,-0.69041 1.5,-1.56928 1.5,-3.34429 0,-3.38064 2.76607,-19.97417 3.76242,-22.57062 0.23298,-0.60714 -0.43866,-0.4943 -2.21399,0.37194 -2.05512,1.00275 -4.41963,1.28156 -12.21509,1.44032 -5.31667,0.10827 -10.68834,-0.0622 -11.93706,-0.37889 l -2.27039,-0.57575 0.44839,6.24242 c 0.24661,3.43333 0.92047,8.04242 1.49746,10.24242 0.577,2.2 1.20838,5.2 1.40307,6.66666 0.19469,1.46667 0.69251,2.88125 1.10626,3.14352 1.31307,0.83233 17.27608,-0.21202 18.91893,-1.23773 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Left Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Left Leg')}
                    d="m 207.84647,426.49999 c 0.81762,-3.75833 1.92091,-9.98333 2.45176,-13.83333 0.53084,-3.85 1.73051,-10.15 2.66594,-14 1.80516,-7.42963 2.15045,-14.81767 1.27136,-27.20237 l -0.43114,-6.07387 -1.69835,1.33592 c -1.25225,0.98503 -2.58367,1.30655 -5.06886,1.22407 -1.85379,-0.0615 -5.21597,0.11411 -7.47151,0.3903 -2.40766,0.29482 -4.88512,0.2288 -6,-0.15988 l -1.899,-0.66205 0.0921,13.07394 c 0.0928,13.16863 0.9705,26.04029 2.22767,32.66933 0.37411,1.97263 0.68019,6.95346 0.68019,11.06851 v 7.48191 l 3.5,0.67284 c 1.925,0.37007 4.55597,0.71226 5.8466,0.76044 l 2.3466,0.0876 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Left Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <Path onPress={() => handleBodyPartPress('Left Ankle')}
                d="m 204.56583,448.11002 c -0.66312,-2.87277 -0.61136,-4.06586 0.32203,-7.42308 0.61167,-2.20008 1.11214,-4.1113 1.11214,-4.24715 0,-0.13584 -1.875,-0.45274 -4.16667,-0.70422 -8.3088,-0.91177 -7.44943,-1.32424 -7.88844,3.7862 -0.21364,2.48698 -0.73864,4.87198 -1.16667,5.3 -1.12721,1.12722 -0.95463,2.05524 0.29317,1.57641 1.75742,-0.67439 6.01256,0.82169 9.06724,3.18797 1.57376,1.21909 2.94146,2.15584 3.03934,2.08166 0.0979,-0.0742 -0.17758,-1.67518 -0.61214,-3.55779 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Ankle' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Left Foot')}
                d="m 211.69697,474.36363 c 1.834,-1.834 2.11832,-3.55388 0.67881,-4.10626 -1.63673,-0.62808 -6.22627,-8.4453 -6.70363,-11.41808 -0.3593,-2.23765 -1.08778,-3.38524 -3.49261,-5.50206 -3.13089,-2.75592 -7.29443,-4.4862 -9.11448,-3.78778 -0.87042,0.334 -1.03118,1.91237 -1.01078,9.92386 0.0133,5.23968 -0.0228,10.23893 -0.0804,11.10946 -0.0575,0.87053 0.53173,2.22053 1.30951,3 1.19484,1.19743 2.47152,1.47608 8.23204,1.79671 3.74984,0.20871 7.20652,0.43371 7.68152,0.5 0.475,0.0663 1.6,-0.61585 2.5,-1.51585 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Foot' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <G>
                <Path onPress={() => handleBodyPartPress('Pelvis')}
                    d="m 198.44982,261.44726 c 14.88067,-5.64286 21.54148,-10.98207 23.18142,-18.5819 0.70023,-3.24498 -2.45006,-28.46868 -3.64803,-29.20907 -0.31008,-0.19165 -1.63473,1.68229 -2.94367,4.1643 -1.30893,2.48201 -4.40331,7.17743 -6.87638,10.43427 -8.9237,11.75183 -10.98389,14.85784 -14.46935,21.81447 -2.11373,4.21881 -3.73047,8.44027 -4.00953,10.46927 -0.52737,3.8344 -0.0689,5.2772 1.31256,4.13068 0.48298,-0.40083 3.83682,-1.85074 7.45298,-3.22202 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Pelvis' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Pelvis')}
                    d="m 180.99517,260.63155 c -0.29359,-2.13464 -1.8577,-6.24187 -4.02232,-10.56222 -3.48545,-6.95663 -5.54564,-10.06264 -14.46934,-21.81447 -2.47308,-3.25684 -5.56745,-7.95226 -6.87638,-10.43427 -1.30894,-2.48201 -2.61798,-4.3656 -2.90896,-4.18575 -1.10717,0.68426 -4.31246,25.76512 -3.70593,28.99821 1.43793,7.66478 8.16563,13.11132 23.27077,18.83931 3.65255,1.38507 6.9431,2.82041 7.31233,3.18964 1.26711,1.26711 1.8841,-0.50938 1.39983,-4.03045 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Pelvis' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <G>
                <Path onPress={() => handleBodyPartPress('Right Leg')}
                    d="m 175.66667,336.68366 c 3.13971,-0.72746 5.19979,-2.91968 4.6453,-4.94325 -0.21206,-0.77389 -1.10803,-3.80708 -1.99105,-6.74041 -0.88302,-2.93334 -4.03769,-13.85156 -7.01037,-24.26272 -2.97268,-10.41116 -6.43365,-22.21063 -7.69104,-26.22103 -2.49158,-7.94675 -2.82952,-11.23539 -1.28618,-12.51625 1.39301,-1.1561 1.24972,-1.83422 -0.5,-2.36625 -2.40086,-0.73001 -8.97778,-4.88077 -11.10632,-7.00931 l -1.95501,-1.95501 -0.38516,1.83195 c -0.21184,1.00757 -0.42535,10.53195 -0.47448,21.16528 -0.0747,16.1793 0.15343,21.39977 1.39865,32 2.25996,19.23848 4.7329,27.51634 8.90202,29.7984 1.23866,0.678 6.92096,1.43668 13.1203,1.75176 0.91667,0.0466 2.86667,-0.19334 4.33334,-0.53316 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Right Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Right Leg')}
                    d="m 178.77841,362 c 0.2448,-1.65 0.9147,-4.8 1.48867,-7 0.57397,-2.2 1.24537,-6.80909 1.49198,-10.24242 l 0.44839,-6.24242 -2.27039,0.57575 c -1.24872,0.31667 -6.62039,0.48716 -11.93706,0.37889 -7.79546,-0.15876 -10.15997,-0.43757 -12.21509,-1.44032 -1.77534,-0.86624 -2.44697,-0.97908 -2.214,-0.37194 0.98462,2.56587 3.76242,19.18088 3.76242,22.50436 0,1.36003 0.46046,2.72502 1.09852,3.25647 1.0417,0.86764 10.73562,1.79161 17.23482,1.64272 2.63794,-0.0604 2.67146,-0.0934 3.11174,-3.06109 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Right Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
                <Path onPress={() => handleBodyPartPress('Right Leg')}
                    d="M 171.75647,432.55143 176,431.76953 v -7.46044 c 0,-4.10324 0.30608,-9.07441 0.68019,-11.04704 1.2753,-6.72468 2.15554,-19.57545 2.23774,-32.66922 L 179,367.51899 l -1.899,0.66195 c -1.11474,0.38856 -3.59265,0.45455 -6,0.15977 -2.25555,-0.27619 -5.61773,-0.45183 -7.47151,-0.3903 -2.4852,0.0825 -3.81661,-0.23904 -5.06886,-1.22407 l -1.69836,-1.33592 -0.43114,6.07387 c -0.87309,12.30022 -0.5311,19.78259 1.23792,27.08442 0.91702,3.78514 1.96942,9.03514 2.33866,11.66667 0.36924,2.63154 1.48494,8.90961 2.47932,13.95128 2.06168,10.45298 1.38192,9.8381 9.26944,8.38477 z"
                    transform="translate(-82.954 -18.166)"
                    fill={selectedPart === 'Right Leg' ? 'green' : 'lightgray'}
                    strokeWidth={1.1}/>
            </G>
            <Path onPress={() => handleBodyPartPress('Right Ankle')}
                d="m 173.95549,446.67865 c 1.41262,-0.38038 3.05052,-0.50659 3.63978,-0.28047 1.2478,0.47883 1.42039,-0.44919 0.29318,-1.57641 -0.42803,-0.42802 -0.95303,-2.81302 -1.16667,-5.3 -0.43901,-5.11044 0.42035,-4.69797 -7.88845,-3.7862 -2.29166,0.25148 -4.16666,0.59268 -4.16666,0.75822 0,0.16555 0.48229,1.96002 1.07175,3.9877 1.00771,3.46639 0.96664,5.94542 -0.16711,10.08716 -0.39974,1.46033 -0.21378,1.40406 2.6932,-0.81488 1.71742,-1.31094 4.27837,-2.69475 5.69098,-3.07512 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Ankle' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Foot')}
                d="m 176.52975,474.23697 c 2.1296,-1.35504 2.82182,-3.56415 2.08326,-6.64831 -0.34095,-1.42377 -0.42795,-5.95758 -0.19334,-10.07513 0.38098,-6.68624 0.30474,-7.53322 -0.71326,-7.92387 -1.92124,-0.73725 -6.02358,0.9346 -9.2396,3.76545 -2.50935,2.20882 -3.13986,3.23226 -3.50938,5.6964 -0.45644,3.04378 -4.56749,9.97084 -6.58879,11.10202 -1.45857,0.81626 -1.28645,2.32341 0.46469,4.06888 1.40796,1.40339 1.94999,1.47958 8.83334,1.24154 4.90584,-0.16966 7.83971,-0.57582 8.86308,-1.22698 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Foot' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Thigh')}
                d="m 182.01477,293 c -6.6e-4,-9.16667 -0.2294,-18.55838 -0.50808,-20.87048 L 181,267.92571 l -5.82813,-2.62952 c -9.14876,-4.12773 -11.88708,-3.44926 -10.5849,2.62263 0.38957,1.81647 2.6717,9.36419 5.0714,16.7727 2.3997,7.40851 5.59622,18.00867 7.10337,23.55592 1.50715,5.54724 2.92346,10.38589 3.14735,10.75256 1.10904,1.81623 2.10698,-10.50584 2.10568,-26 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Thigh' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Left Thigh')}
                d="m 192.26759,314.5 c 2.08319,-8.18886 5.65962,-20.28518 9.70758,-32.83334 5.57806,-17.29128 5.69412,-19 1.29056,-19 -2.42616,0 -13.08008,4.67546 -13.67215,6 -0.92468,2.06867 -1.11969,36.70048 -0.2465,43.77807 0.46742,3.78873 1.03911,6.8886 1.2704,6.8886 0.23129,0 0.97384,-2.175 1.65011,-4.83333 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Thigh' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Right Elbow')}
                d="m 138.0165,182.28993 c 0.35759,-0.94053 0.65017,-2.87897 0.65017,-4.30764 0,-2.49669 -0.11004,-2.626 -2.83334,-3.32961 -1.55833,-0.40262 -3.43333,-0.90268 -4.16666,-1.11124 -2.49651,-0.70999 -6.29086,-2.87821 -8.62827,-4.93049 -2.82939,-2.48424 -3.99701,-2.04283 -3.37445,1.27569 0.64804,3.45432 2.02612,5.80958 4.50202,7.69428 2.11738,1.61179 11.60232,6.41908 12.66506,6.41908 0.29442,0 0.82788,-0.76953 1.18547,-1.71007 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Right Elbow' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
            <Path onPress={() => handleBodyPartPress('Left Elbow')}
                d="m 240.33333,181.17289 c 7.41924,-3.68468 9.69493,-6.09195 10.66939,-11.28625 0.59186,-3.1549 -0.57679,-3.85578 -2.89023,-1.73339 -3.90754,3.58486 -6.07396,4.64556 -13.27916,6.50161 -2.72367,0.70161 -2.83333,0.8304 -2.83333,3.32743 0,1.42867 0.30023,3.38725 0.66719,4.3524 0.77741,2.04476 1.39944,1.95049 7.66614,-1.1618 z"
                transform="translate(-82.954 -18.166)"
                fill={selectedPart === 'Left Elbow' ? 'green' : 'lightgray'}
                strokeWidth={1.1}/>
        </Svg>
    </View>
    )
}

export default BodyPartsComponent