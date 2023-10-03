export default interface IUseCase<E, R> {
  execute(entry: E): Promise<R>;
}
