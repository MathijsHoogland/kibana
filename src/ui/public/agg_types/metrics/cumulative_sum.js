import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import ParentPipelineAggHelperProvider from './lib/parent_pipeline_agg_helper';
import { makeNestedLabel } from './lib/make_nested_label';

export default function AggTypeMetricComulativeSumProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  const parentPipelineAggHelper = Private(ParentPipelineAggHelperProvider);

  return new MetricAggType({
    name: 'cumulative_sum',
    title: 'Cumulative Sum',
    makeLabel: agg => makeNestedLabel(agg, 'cumulative sum'),
    params: [
      ...parentPipelineAggHelper.params()
    ]
  });
}
