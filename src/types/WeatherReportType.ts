export default interface WeatherReportType extends Record<string, unknown> {
  /**
   * Time the report was created.
   * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:(\d+\.\d+)Z$
   */
  feedCreation: string;

  /**
   * Whether the values in the report use metric or Imperial units.
   */
  metric: boolean;
}
