import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Surface, Text, Divider } from 'react-native-paper';
import CollapseButton from '../components/CollapseButton';
import ResultSection from '../components/ResultSection';
import TemplatePage from './TemplatePage';
import HomeButton from '../components/HomeButton/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollview: {
        height: '100%',
    },
    surface: {
        padding: 8,
        borderRadius: 10,
        gap: 10,
        marginBottom: 15
    },
    boxes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10
    }
})

export default function PaginaPrincipal({ navigation }) {
    const [tapeSize, setTapeSize] = useState("");
    const [anchorsDistance, setAnchorsDistance] = useState("");
    const [carabinerSize, setCarabinerSize] = useState("");

    const [weightPercentage, setWeightPercentage] = useState(undefined);
    const [formedAngles, setFormedAngles] = useState(undefined);

    useEffect(() => {
        if (tapeSize?.trim() === "" || anchorsDistance?.trim() === "") return;
        
        const tapeSizeNumber = parseFloat(tapeSize.trim());
        const anchorsDistanceNumber = parseFloat(anchorsDistance.trim());
        const carabinerSizeNumber = carabinerSize.trim() === "" ? 0.09 : parseFloat(carabinerSize.trim()) / 100;
        const halfTapeSizePlusCarabiner = (tapeSizeNumber / 2) + carabinerSizeNumber;
        const anglesCos = (2*Math.pow(halfTapeSizePlusCarabiner, 2)-Math.pow(anchorsDistanceNumber, 2))/(2*Math.pow(halfTapeSizePlusCarabiner, 2));

        setFormedAngles(Math.acos(anglesCos)*(180/3.1415));
        setWeightPercentage(1/Math.pow(2+2*anglesCos, 1/2)*100);
    }, [tapeSize, anchorsDistance, carabinerSize]);

    return (
        <TemplatePage>
            <Surface style={{...styles.surface, marginHorizontal: 10, marginTop: 10}} elevation={4}>
                <View style={styles.boxes}>
                    <TextInput label="Tamanho da Fita" 
                    mode='outlined' inputMode='numeric'
                    right={<TextInput.Affix text='m' />}
                    style={{flex: 1}} 
                    value={tapeSize}
                    onChangeText={e => setTapeSize(e)}/>

                    <TextInput label="Distância"
                    mode='outlined' inputMode='numeric'
                    right={<TextInput.Affix text='m' />}
                    style={{flex: 1}}
                    value={anchorsDistance}
                    onChangeText={e => setAnchorsDistance(e)}/>
                </View>
                <CollapseButton title="Mais Detalhes" expandedTitle="Menos Detalhes">
                    <TextInput label="Tamanho do Mosquetão"
                    mode="outlined" inputMode='numeric'
                    right={<TextInput.Affix text="cm" />}
                    placeholder='Valor padrão: 9'
                    value={carabinerSize}
                    onChangeText={e => setCarabinerSize(e)} />
                </CollapseButton>
            </Surface>
            <Divider style={{marginBottom: 10}}/>
            <ResultSection title="Distribuição dos Pesos" surfaceStyle={{...styles.surface, flexDirection: 'row', marginBottom: 0}}
            style={{marginBottom: 15, marginHorizontal: 10}} results={[
                <>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text variant='displaySmall'>{weightPercentage ? `${weightPercentage?.toFixed(1)}%` : "N/A"}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text variant='titleMedium' style={{textAlign: 'right'}}>Percentual por ancoragem</Text>
                </View>
                </>
            ]} />
            <ResultSection title="Ângulos Formados" surfaceStyle={{...styles.surface, gap: 0, marginBottom: 0}}
            style={{marginBottom: 15, marginHorizontal: 10}} results={[
                <>
                    <Text variant='displaySmall' style={{textAlign: 'center'}}>{formedAngles ? `${formedAngles?.toFixed(1)}°` : 'N/A'}</Text>
                    <Text variant='labelLarge' style={{textAlign: 'center'}}>Ângulo Inferior</Text>
                </>,
                <>
                    <Text variant='displaySmall' style={{textAlign: 'center'}}>{formedAngles ? `${((180 - formedAngles) / 2)?.toFixed(1)}°` : 'N/A'}</Text>
                    <Text variant='labelLarge' style={{textAlign: 'center'}}>Ângulos Superiores</Text>
                </>
            ]} />
            <Divider />
            <HomeButton icon="help-circle-outline" onPress={() => navigation.navigate("About")}
            title="Sobre" style={{marginTop: 15}} />
        </TemplatePage>
    )
}
