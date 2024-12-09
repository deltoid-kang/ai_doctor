import { Box, Typography } from '@mui/material';
import { SummaryDetailsContent } from '../sub/SummaryDetailsContent';
import { History } from '../sub/History';
import { ChatMessageList } from '../sub/chat-message-list';

// ----------------------------------------------------------------------

type Props = {
  detail?: any;
};

export function FollowUp({ detail }: Props) {
  const summary_data = {
    detail: detail.followup_summary,
  };
  const history_data = [...Array(9)].map((_, index) => {
    const category = [
      'data',
      'doctor opinion',
      'impact on daily life',
      'medication effectiveness',
      'medicine',
      'new symptoms',
      'progress',
      'side effects',
      'symptom changes',
    ][index];
    const content = [
      detail.date,
      detail.doctor_opinion,
      detail.impact_on_daily_life,
      detail.medication_effectiveness,
      detail.medicine,
      detail.new_symptoms,
      detail.progress,
      detail.side_effects,
      detail.symptom_changes,
    ][index];

    return {
      id: index,
      category,
      content,
    };
  });

  return (
    <>
      <Typography variant="h4" sx={{ mb: '8px' }}>
        {detail.followup_summary}
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: '65%' }}>
          <SummaryDetailsContent data={summary_data} />
        </Box>
        <Box sx={{ flex: '35%', px: '8px' }}>
          <ChatMessageList
            messages={[
              {
                id: 0,
                me: false,
                text: '어쩌구저쩌구',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
              {
                id: 1,
                me: false,
                text: '222어쩌구저쩌구',
              },
              {
                id: 2,
                me: true,
                text: '33333333333',
              },
            ]}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: '16px' }}>
        <History
          type="0"
          tableData={history_data}
          headLabel={[
            { id: 'category', label: 'Category' },
            { id: 'content', label: 'Content' },
          ]}
        />
      </Box>
    </>
  );
}
