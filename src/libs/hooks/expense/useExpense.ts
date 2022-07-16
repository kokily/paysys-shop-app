import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addExpenseAPI, updateExpenseAPI } from '../../api/expense';
import { readWeddingAPI } from '../../api/weddings';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList>;
}

function useExpense({ navigation, route }: Props) {
  const queryClient = useQueryClient();
  const { id }: any = route.params;
  useQuery('updateReadWedding', () => readWeddingAPI(id), {
    enabled: true,
    retry: 0,
    onSuccess: (data) => {
      // Todo... Setting initial Value
      setHusband_name(data.wedding.husband_name);
      setBride_name(data.wedding.bride_name);
      setEvent_at(data.wedding.event_at);
      setCompany_husband(data.company.company_husband.toString());
      setCompany_bride(data.company.company_bride.toString());
      setRooftop_husband(data.company.rooftop_husband.toString());
      setRooftop_bride(data.company.rooftop_bride.toString());
      setOwner_woman_husband(data.company.owner_woman_husband.toString());
      setOwner_woman_bride(data.company.owner_woman_bride.toString());
      setOwner_man_husband(data.company.owner_man_husband.toString());
      setOwner_man_bride(data.company.owner_man_bride.toString());
      setSelect_husband(data.company.select_husband.toString());
      setSelect_bride(data.company.select_bride.toString());
      setFrame_husband(data.company.frame_husband.toString());
      setFrame_bride(data.company.frame_bride.toString());
      setDress_husband(data.company.dress_husband.toString());
      setDress_bride(data.company.dress_bride.toString());
      setHairpin_husband(data.company.hairpin_husband.toString());
      setHairpin_bride(data.company.hairpin_bride.toString());
      setWig_husband(data.company.wig_husband.toString());
      setWig_bride(data.company.wig_bride.toString());
      setVideo_husband(data.company.video_husband.toString());
      setVideo_bride(data.company.video_bride.toString());
      setEtc_husband(data.company.etc_husband.toString());
      setEtc_bride(data.company.etc_bride.toString());
      setRental_husband(data.convention.rental_husband.toString());
      setRental_bride(data.convention.rental_bride.toString());
      setSword_husband(data.convention.sword_husband.toString());
      setSword_bride(data.convention.sword_bride.toString());
      setGlove_husband(data.convention.glove_husband.toString());
      setGlove_bride(data.convention.glove_bride.toString());
      setBouquet_husband(data.convention.bouquet_husband.toString());
      setBouquet_bride(data.convention.bouquet_bride.toString());
      setCeremony_husband(data.convention.ceremony_husband.toString());
      setCeremony_bride(data.convention.ceremony_bride.toString());
      setPlay_husband(data.event.play_husband.toString());
      setPlay_bride(data.event.play_bride.toString());
      setAnthem_husband(data.event.anthem_husband.toString());
      setAnthem_bride(data.event.anthem_bride.toString());
      setModerator_husband(data.event.moderator_husband.toString());
      setModerator_bride(data.event.moderator_bride.toString());
      setOfficiate_husband(data.event.officiate_husband.toString());
      setOfficiate_bride(data.event.officiate_bride.toString());
      setHanbok_pre_husband(data.hanbok.hanbok_pre_husband.toString());
      setHanbok_pre_bride(data.hanbok.hanbok_pre_bride.toString());
      setHanbok_post_husband(data.hanbok.hanbok_post_husband.toString());
      setHanbok_post_bride(data.hanbok.hanbok_post_bride.toString());
      setMeals(data.meal.meals);
      setMeals_price(data.meal.meals_price.toString());
      setMeals_num_husband(data.meal.meals_num_husband.toString());
      setMeals_num_bride(data.meal.meals_num_bride.toString());
      setPresent(data.present.present);
      setPresent_price(data.present.present_price.toString());
      setPresent_num_husband(data.present.present_num_husband.toString());
      setPresent_num_bride(data.present.present_num_bride.toString());
      setReserve(data.reserve.reserve);
      setReserve_pay(data.reserve.reserve_pay.toString());
      setPrepayment_husband(data.prepayment.prepayment_husband.toString());
      setPrepayment_bride(data.prepayment.prepayment_bride.toString());
      setStartDate(new Date(data.wedding.wedding_at));
    },
    onError: () => {},
  });
  const [husband_name, setHusband_name] = useState('');
  const [bride_name, setBride_name] = useState('');
  const [event_at, setEvent_at] = useState('');
  const [company_husband, setCompany_husband] = useState('0');
  const [company_bride, setCompany_bride] = useState('0');
  const [rooftop_husband, setRooftop_husband] = useState('0');
  const [rooftop_bride, setRooftop_bride] = useState('0');
  const [owner_woman_husband, setOwner_woman_husband] = useState('0');
  const [owner_woman_bride, setOwner_woman_bride] = useState('0');
  const [owner_man_husband, setOwner_man_husband] = useState('0');
  const [owner_man_bride, setOwner_man_bride] = useState('0');
  const [select_husband, setSelect_husband] = useState('0');
  const [select_bride, setSelect_bride] = useState('0');
  const [frame_husband, setFrame_husband] = useState('0');
  const [frame_bride, setFrame_bride] = useState('0');
  const [dress_husband, setDress_husband] = useState('0');
  const [dress_bride, setDress_bride] = useState('0');
  const [hairpin_husband, setHairpin_husband] = useState('0');
  const [hairpin_bride, setHairpin_bride] = useState('0');
  const [wig_husband, setWig_husband] = useState('0');
  const [wig_bride, setWig_bride] = useState('0');
  const [video_husband, setVideo_husband] = useState('0');
  const [video_bride, setVideo_bride] = useState('0');
  const [etc_husband, setEtc_husband] = useState('0');
  const [etc_bride, setEtc_bride] = useState('0');
  const [rental_husband, setRental_husband] = useState('0');
  const [rental_bride, setRental_bride] = useState('0');
  const [sword_husband, setSword_husband] = useState('0');
  const [sword_bride, setSword_bride] = useState('0');
  const [glove_husband, setGlove_husband] = useState('0');
  const [glove_bride, setGlove_bride] = useState('0');
  const [bouquet_husband, setBouquet_husband] = useState('0');
  const [bouquet_bride, setBouquet_bride] = useState('0');
  const [ceremony_husband, setCeremony_husband] = useState('0');
  const [ceremony_bride, setCeremony_bride] = useState('0');
  const [play_husband, setPlay_husband] = useState('0');
  const [play_bride, setPlay_bride] = useState('0');
  const [anthem_husband, setAnthem_husband] = useState('0');
  const [anthem_bride, setAnthem_bride] = useState('0');
  const [moderator_husband, setModerator_husband] = useState('0');
  const [moderator_bride, setModerator_bride] = useState('0');
  const [officiate_husband, setOfficiate_husband] = useState('0');
  const [officiate_bride, setOfficiate_bride] = useState('0');
  const [hanbok_pre_husband, setHanbok_pre_husband] = useState('0');
  const [hanbok_pre_bride, setHanbok_pre_bride] = useState('0');
  const [hanbok_post_husband, setHanbok_post_husband] = useState('0');
  const [hanbok_post_bride, setHanbok_post_bride] = useState('0');
  const [meals, setMeals] = useState('privacy');
  const [meals_price, setMeals_price] = useState('');
  const [meals_num_husband, setMeals_num_husband] = useState('');
  const [meals_num_bride, setMeals_num_bride] = useState('');
  const [present, setPresent] = useState('privacy');
  const [present_price, setPresent_price] = useState('');
  const [present_num_husband, setPresent_num_husband] = useState('');
  const [present_num_bride, setPresent_num_bride] = useState('');
  const [reserve, setReserve] = useState('half');
  const [reserve_pay, setReserve_pay] = useState('');
  const [prepayment_husband, setPrepayment_husband] = useState('');
  const [prepayment_bride, setPrepayment_bride] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const addExpenseMutate = useMutation(addExpenseAPI);
  const updateExpenseMutate = useMutation(updateExpenseAPI);

  const onBack = () => {
    navigation.goBack();
  };

  const onAddExpense = async () => {
    if (
      [
        husband_name,
        bride_name,
        event_at,
        company_husband,
        company_bride,
        rooftop_husband,
        rooftop_bride,
        owner_woman_husband,
        owner_woman_bride,
        owner_man_husband,
        owner_man_bride,
        select_husband,
        select_bride,
        frame_husband,
        frame_bride,
        dress_husband,
        dress_bride,
        hairpin_husband,
        hairpin_bride,
        wig_husband,
        wig_bride,
        video_husband,
        video_bride,
        etc_husband,
        etc_bride,
        rental_husband,
        rental_bride,
        sword_husband,
        sword_bride,
        glove_husband,
        glove_bride,
        bouquet_husband,
        bouquet_bride,
        ceremony_husband,
        ceremony_bride,
        play_husband,
        play_bride,
        anthem_husband,
        anthem_bride,
        moderator_husband,
        moderator_bride,
        officiate_husband,
        officiate_bride,
        hanbok_pre_husband,
        hanbok_pre_bride,
        hanbok_post_husband,
        hanbok_post_bride,
        meals,
        meals_price,
        meals_num_husband,
        meals_num_bride,
        present,
        present_price,
        present_num_husband,
        present_num_bride,
        reserve,
        reserve_pay,
        prepayment_husband,
        prepayment_bride,
      ].includes('')
    ) {
      Alert.alert('빈 칸이 없도록 입력해주세요');
      return;
    }

    try {
      // 예약금
      let reserve_husband = 0;
      let reserve_bride = 0;

      if (reserve === 'half') {
        reserve_husband = parseInt(reserve_pay) / 2;
        reserve_bride = parseInt(reserve_pay) / 2;
      } else if (reserve === 'husband') {
        reserve_husband = parseInt(reserve_pay);
        reserve_bride = 0;
      } else {
        reserve_husband = 0;
        reserve_bride = parseInt(reserve_pay);
      }

      // 식대
      let meal_husband = 0;
      let meal_bride = 0;

      if (meals === 'privacy') {
        meal_husband = parseInt(meals_price) * parseInt(meals_num_husband);
        meal_bride = parseInt(meals_price) * parseInt(meals_num_bride);
      } else if (meals === 'husband') {
        meal_husband =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
        meal_bride = 0;
      } else if (meals === 'bride') {
        meal_husband = 0;
        meal_bride =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
      } else {
        meal_husband =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
        meal_bride =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
      }

      // 답례품
      let present_husband = 0;
      let present_bride = 0;

      if (present === 'privacy') {
        present_husband =
          parseInt(present_price) * parseInt(present_num_husband);
        present_bride = parseInt(present_price) * parseInt(present_num_bride);
      } else if (present === 'husband') {
        present_husband =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
        present_bride = 0;
      } else if (present === 'bride') {
        present_husband = 0;
        present_bride =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
      } else {
        present_husband =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
        present_bride =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
      }

      if (!id) {
        // Add Expense
        await addExpenseMutate.mutateAsync({
          husband_name,
          bride_name,
          wedding_at: startDate.toLocaleDateString(),
          event_at,
          company_husband: parseInt(company_husband),
          company_bride: parseInt(company_bride),
          rooftop_husband: parseInt(rooftop_husband),
          rooftop_bride: parseInt(rooftop_bride),
          owner_woman_husband: parseInt(owner_woman_husband),
          owner_woman_bride: parseInt(owner_woman_bride),
          owner_man_husband: parseInt(owner_man_husband),
          owner_man_bride: parseInt(owner_man_bride),
          select_husband: parseInt(select_husband),
          select_bride: parseInt(select_bride),
          frame_husband: parseInt(frame_husband),
          frame_bride: parseInt(frame_bride),
          dress_husband: parseInt(dress_husband),
          dress_bride: parseInt(dress_bride),
          hairpin_husband: parseInt(hairpin_husband),
          hairpin_bride: parseInt(hairpin_bride),
          wig_husband: parseInt(wig_husband),
          wig_bride: parseInt(wig_bride),
          video_husband: parseInt(video_husband),
          video_bride: parseInt(video_bride),
          etc_husband: parseInt(etc_husband),
          etc_bride: parseInt(etc_bride),
          rental_husband: parseInt(rental_husband),
          rental_bride: parseInt(rental_bride),
          sword_husband: parseInt(sword_husband),
          sword_bride: parseInt(sword_bride),
          glove_husband: parseInt(glove_husband),
          glove_bride: parseInt(glove_bride),
          bouquet_husband: parseInt(bouquet_husband),
          bouquet_bride: parseInt(bouquet_bride),
          ceremony_husband: parseInt(ceremony_husband),
          ceremony_bride: parseInt(ceremony_bride),
          play_husband: parseInt(play_husband),
          play_bride: parseInt(play_bride),
          anthem_husband: parseInt(anthem_husband),
          anthem_bride: parseInt(anthem_bride),
          moderator_husband: parseInt(moderator_husband),
          moderator_bride: parseInt(moderator_bride),
          officiate_husband: parseInt(officiate_husband),
          officiate_bride: parseInt(officiate_bride),
          hanbok_pre_husband: parseInt(hanbok_pre_husband),
          hanbok_pre_bride: parseInt(hanbok_pre_bride),
          hanbok_post_husband: parseInt(hanbok_post_husband),
          hanbok_post_bride: parseInt(hanbok_post_bride),
          meals,
          meals_price: parseInt(meals_price),
          meals_num_husband: parseInt(meals_num_husband),
          meals_num_bride: parseInt(meals_num_bride),
          present,
          present_price: parseInt(present_price),
          present_num_husband: parseInt(present_num_husband),
          present_num_bride: parseInt(present_num_bride),
          reserve,
          reserve_pay: parseInt(reserve_pay),
          cost_husband:
            parseInt(rental_husband) +
            parseInt(sword_husband) +
            parseInt(glove_husband) +
            parseInt(bouquet_husband) +
            parseInt(ceremony_husband) +
            parseInt(company_husband) +
            parseInt(rooftop_husband) +
            parseInt(owner_woman_husband) +
            parseInt(owner_man_husband) +
            parseInt(select_husband) +
            parseInt(frame_husband) +
            parseInt(dress_husband) +
            parseInt(hairpin_husband) +
            parseInt(wig_husband) +
            parseInt(video_husband) +
            parseInt(etc_husband) +
            parseInt(play_husband) +
            parseInt(anthem_husband) +
            parseInt(moderator_husband) +
            parseInt(officiate_husband) +
            parseInt(hanbok_pre_husband) +
            parseInt(hanbok_post_husband),
          cost_bride:
            parseInt(rental_bride) +
            parseInt(sword_bride) +
            parseInt(glove_bride) +
            parseInt(bouquet_bride) +
            parseInt(ceremony_bride) +
            parseInt(company_bride) +
            parseInt(rooftop_bride) +
            parseInt(owner_woman_bride) +
            parseInt(owner_man_bride) +
            parseInt(select_bride) +
            parseInt(frame_bride) +
            parseInt(dress_bride) +
            parseInt(hairpin_bride) +
            parseInt(wig_bride) +
            parseInt(video_bride) +
            parseInt(etc_bride) +
            parseInt(play_bride) +
            parseInt(anthem_bride) +
            parseInt(moderator_bride) +
            parseInt(officiate_bride) +
            parseInt(hanbok_pre_bride) +
            parseInt(hanbok_post_bride),
          meal_husband,
          meal_bride,
          present_husband,
          present_bride,
          reserve_husband,
          reserve_bride,
          prepayment_husband: parseInt(prepayment_husband),
          prepayment_bride: parseInt(prepayment_bride),
        });
      } else {
        // Update Expense
        await updateExpenseMutate.mutateAsync({
          id,
          husband_name,
          bride_name,
          wedding_at: startDate.toLocaleDateString(),
          event_at,
          company_husband: parseInt(company_husband),
          company_bride: parseInt(company_bride),
          rooftop_husband: parseInt(rooftop_husband),
          rooftop_bride: parseInt(rooftop_bride),
          owner_woman_husband: parseInt(owner_woman_husband),
          owner_woman_bride: parseInt(owner_woman_bride),
          owner_man_husband: parseInt(owner_man_husband),
          owner_man_bride: parseInt(owner_man_bride),
          select_husband: parseInt(select_husband),
          select_bride: parseInt(select_bride),
          frame_husband: parseInt(frame_husband),
          frame_bride: parseInt(frame_bride),
          dress_husband: parseInt(dress_husband),
          dress_bride: parseInt(dress_bride),
          hairpin_husband: parseInt(hairpin_husband),
          hairpin_bride: parseInt(hairpin_bride),
          wig_husband: parseInt(wig_husband),
          wig_bride: parseInt(wig_bride),
          video_husband: parseInt(video_husband),
          video_bride: parseInt(video_bride),
          etc_husband: parseInt(etc_husband),
          etc_bride: parseInt(etc_bride),
          rental_husband: parseInt(rental_husband),
          rental_bride: parseInt(rental_bride),
          sword_husband: parseInt(sword_husband),
          sword_bride: parseInt(sword_bride),
          glove_husband: parseInt(glove_husband),
          glove_bride: parseInt(glove_bride),
          bouquet_husband: parseInt(bouquet_husband),
          bouquet_bride: parseInt(bouquet_bride),
          ceremony_husband: parseInt(ceremony_husband),
          ceremony_bride: parseInt(ceremony_bride),
          play_husband: parseInt(play_husband),
          play_bride: parseInt(play_bride),
          anthem_husband: parseInt(anthem_husband),
          anthem_bride: parseInt(anthem_bride),
          moderator_husband: parseInt(moderator_husband),
          moderator_bride: parseInt(moderator_bride),
          officiate_husband: parseInt(officiate_husband),
          officiate_bride: parseInt(officiate_bride),
          hanbok_pre_husband: parseInt(hanbok_pre_husband),
          hanbok_pre_bride: parseInt(hanbok_pre_bride),
          hanbok_post_husband: parseInt(hanbok_post_husband),
          hanbok_post_bride: parseInt(hanbok_post_bride),
          meals,
          meals_price: parseInt(meals_price),
          meals_num_husband: parseInt(meals_num_husband),
          meals_num_bride: parseInt(meals_num_bride),
          present,
          present_price: parseInt(present_price),
          present_num_husband: parseInt(present_num_husband),
          present_num_bride: parseInt(present_num_bride),
          reserve,
          reserve_pay: parseInt(reserve_pay),
          cost_husband:
            parseInt(rental_husband) +
            parseInt(sword_husband) +
            parseInt(glove_husband) +
            parseInt(bouquet_husband) +
            parseInt(ceremony_husband) +
            parseInt(company_husband) +
            parseInt(rooftop_husband) +
            parseInt(owner_woman_husband) +
            parseInt(owner_man_husband) +
            parseInt(select_husband) +
            parseInt(frame_husband) +
            parseInt(dress_husband) +
            parseInt(hairpin_husband) +
            parseInt(wig_husband) +
            parseInt(video_husband) +
            parseInt(etc_husband) +
            parseInt(play_husband) +
            parseInt(anthem_husband) +
            parseInt(moderator_husband) +
            parseInt(officiate_husband) +
            parseInt(hanbok_pre_husband) +
            parseInt(hanbok_post_husband),
          cost_bride:
            parseInt(rental_bride) +
            parseInt(sword_bride) +
            parseInt(glove_bride) +
            parseInt(bouquet_bride) +
            parseInt(ceremony_bride) +
            parseInt(company_bride) +
            parseInt(rooftop_bride) +
            parseInt(owner_woman_bride) +
            parseInt(owner_man_bride) +
            parseInt(select_bride) +
            parseInt(frame_bride) +
            parseInt(dress_bride) +
            parseInt(hairpin_bride) +
            parseInt(wig_bride) +
            parseInt(video_bride) +
            parseInt(etc_bride) +
            parseInt(play_bride) +
            parseInt(anthem_bride) +
            parseInt(moderator_bride) +
            parseInt(officiate_bride) +
            parseInt(hanbok_pre_bride) +
            parseInt(hanbok_post_bride),
          meal_husband,
          meal_bride,
          present_husband,
          present_bride,
          reserve_husband,
          reserve_bride,
          prepayment_husband: parseInt(prepayment_husband),
          prepayment_bride: parseInt(prepayment_bride),
        });
      }

      Alert.alert('웨딩 전표 전송!');
      await queryClient.invalidateQueries('listWeddings');
      navigation.goBack();
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return {
    // Expensive Wedding
    husband_name,
    bride_name,
    wedding_at: startDate,
    event_at,
    setStartDate,
    // Convention
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    // Company
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    // Hanbok
    hanbok_pre_husband,
    hanbok_pre_bride,
    hanbok_post_husband,
    hanbok_post_bride,
    // Event
    play_husband,
    play_bride,
    anthem_husband,
    anthem_bride,
    moderator_husband,
    moderator_bride,
    officiate_husband,
    officiate_bride,
    // Meal
    meals,
    meals_price,
    meals_num_husband,
    meals_num_bride,
    // Present
    present,
    present_price,
    present_num_husband,
    present_num_bride,
    // Reserve
    reserve,
    reserve_pay,
    // Prepayment
    prepayment_husband,
    prepayment_bride,
    // Button
    onBack,
    onAddExpense,
  };
}

export default useExpense;
